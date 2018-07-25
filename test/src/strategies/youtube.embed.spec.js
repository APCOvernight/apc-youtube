const chai = require('chai')
chai.use(require('sinon-chai'))
const expect = chai.expect
const URL = require('url').URL
const Base = require('../../../src/strategies/youtube.embed')

describe('youtube embed provider functionality', () => {
  it('youtube embed should handle www.youtube.com', () => {
    expect(Base.SupportedHost()).to.equal('www.youtube.com')
  })
  it('youtube embed should handle www.youtube.com', () => {
    expect(Base.Supports(new URL('https://www.youtube.com/embed/123'))).to.equal(true)
    expect(Base.Supports(new URL('https://www.youtube.com/foobar/123'))).to.equal(false)
  })
  it('youtube embed should handle www.youtube.com', () => {
    const ytEmbed = new Base()
    expect(ytEmbed).to.be.an('object')
  })
})
