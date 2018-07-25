const oEmbedStrategies = require('./strategies/strategies')
const URL = require('url').URL
/**
 * Library for fixing youTube urls
 */
class liboembed {
  /**
  * Find the appropriate strategy for fixing the URL.
  * @param {string} address Address to locate.
  * @returns {URL} resolved address, or throws error.
  */
  ResolveAddress (address) {
    if (typeof address === 'string') { address = new URL(address) } // eslint-disable-line
    let strategies = Object.keys(oEmbedStrategies)
    for (let i = 0; i < strategies.length; i++) {
      let strategy = oEmbedStrategies[strategies[i]]
      if (strategy.Supports(address)) {
        const urlParameters = strategy.getVideoProperties(address)
        let querystring = this.encodeQueryData(urlParameters.parameters)
        let embedUrl = new URL('https://www.youtube.com/embed/' + urlParameters.videoID + '?' + querystring)
        return embedUrl
      }
    }
    throw Error('Unable to process address ' + address)
  }

  /**
   * Encode query data.
   * @param {*} data input search parameters
   * @returns {*} encoded parameters.
   */
  encodeQueryData (data) {
    let ret = []
    for (let d in data) { ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d])) }
    return ret.join('&')
  }
}

module.exports = liboembed
