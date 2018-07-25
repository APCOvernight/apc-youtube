// const https = require('https')
const Abstract = require('./base_provider')
/**
 * Provider for youtu.be style urls.
 */
class youtubeProvider extends Abstract {
  /**
  * Supportec URL : youtu.be
  * @returns {string} supported url : youtu.be
  */
  static SupportedHost () { return 'www.youtube.com' }
  /**
   * returns the URl criteria (video ID, time, sharing parameters etc)
   * @param {*} URL to check.
   * @returns {*} object of youtube parameters.
   */
  static getVideoProperties (URL) {
    const videoID = URL.pathname.substr('/embed/'.length)
    let obj = {}
    for (let pair of URL.searchParams.entries()) {
      obj[pair[0]] = pair[1]
    }

    return {
      videoID,
      parameters: obj
    }
  }

  /**
   * Method returns true/ false if this provider supports a passed in URL.
   * @param {*} url URL to check.
   * @returns {boolean} Result of the check.
   */
  static Supports (url) {
    if (url.hostname === this.SupportedHost() && (url.pathname.startsWith('/embed'))) {
      return true
    }
    return false
  }
}

module.exports = youtubeProvider
