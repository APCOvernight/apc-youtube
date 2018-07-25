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
    const videoID = URL.searchParams.get('v')
    let obj = {}
    for (let pair of URL.searchParams.entries()) {
      obj[pair[0]] = pair[1]
    }
    delete obj.v

    return {
      videoID,
      parameters: obj
    }
  }

  /**
   * Overrides base Supports method - returns whether this provide could support the url presented.
   * @param {*} url URL to tets.
   * @returns {boolean} returns true/false based on whether the URL can be supported by this provider.
   */
  static Supports (url) {
    if (url.hostname === this.SupportedHost() && (url.pathname === '/watch')) {
      return true
    }
    return false
  }
}

module.exports = youtubeProvider
