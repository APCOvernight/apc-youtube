/**
 * extract video and criteria from youtu.be addresses
 */
class baseProvider {
  /**
   * Prevent direct instantiation of base class.
   */
  constructor () {
    if (new.target === baseProvider) { /* istanbul ignore else */
      throw new TypeError('Cannot construct baseProvider instances directly - inherrit from this class and add SupportedHost and getoEmbedURL methods.')
    }
  }
  /**
   * returns the host that this provider works for.
   * @param {*} url address to check.
   * @returns {*} boolean as to whether the system supports the host.
   */
  static Supports (url) {
    if (url.hostname === this.SupportedHost()) {
      return true
    }
    return false
  }
}

module.exports = baseProvider
