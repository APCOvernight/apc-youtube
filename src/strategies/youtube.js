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
  static SupportedHost () { return 'youtu.be' }
  /**
   * returns the URl criteria (video ID, time, sharing parameters etc)
   * @param {*} URL to check.
   * @returns {*} object of youtube parameters.
   */
  static getVideoProperties (URL) {
    const videoID = URL.pathname.replace(/^\//, '')
    let obj = {}
    for (let pair of URL.searchParams.entries()) {
      obj[pair[0]] = pair[1]
    }
    const start = null
    return {
      videoID,
      start,
      parameters: obj
    }
  }
}

module.exports = youtubeProvider
