const chai = require('chai')
chai.use(require('sinon-chai'))
const expect = chai.expect
// const sinon = require('sinon')
const Test = require('../src/liboembed.js')
const URL = require('url').URL

describe('youtu.be parameter extraction and embedded URL generation', () => {
  it('Convert youtu.be url as URL to embedded url', () => {
    // Arrange
    let sourceUrl = new URL('https://youtu.be/rqriPNsaplV4')
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/rqriPNsaplV4')
    expect(Array.from(newURL.searchParams).length).to.equal(0)
  })

  it('Convert youtu.be url as URL with start time to embedded url', () => {
    // Arrange
    let sourceUrl = new URL('https://youtu.be/rqriPNsaplV4?t=1m20s')
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/rqriPNsaplV4')
    expect(newURL.searchParams.has('t'))
    expect(newURL.searchParams.getAll('t').length).to.equal(1)
  })

  it('Convert youtu.be url as string to embedded url', () => {
    // Arrange
    let sourceUrl = 'https://youtu.be/rqriPNsaplV4'
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/rqriPNsaplV4')
    expect(Array.from(newURL.searchParams).length).to.equal(0)
  })

  it('Passing in a URL that is unrecognised will return a URL of the same input', () => {
    // const res = Test()
    let sourceUrl = 'https://apc-overnight.com'
    const t = new Test()
    let fcn = function () { t.ResolveAddress(sourceUrl) }
    // Act
    expect(fcn).to.throw(Error, 'Unable to process address https://apc-overnight.com')
  })
})

describe('youtube.com/watch/qriPNsaplV4 parameter extraction and embedded URL generation', () => {
  it('Convert youtube/watch url as URL to embedded url', () => {
    // Arrange
    let sourceUrl = new URL('https://www.youtube.com/watch?v=qriPNsaplV4')
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/qriPNsaplV4')
    expect(Array.from(newURL.searchParams).length).to.equal(0)
  })

  it('Convert youtube/watch url as string to embedded url', () => {
    // Arrange
    let sourceUrl = 'https://www.youtube.com/watch?v=qriPNsaplV4'
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/qriPNsaplV4')
    expect(Array.from(newURL.searchParams).length).to.equal(0)
  })

  it('Convert youtube/watch url as URL with start time to embedded url', () => {
    // Arrange
    let sourceUrl = new URL('https://www.youtube.com/watch?v=qriPNsaplV4&t=1m12s')
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/qriPNsaplV4')
    expect(newURL.searchParams.has('t'))
    expect(newURL.searchParams.getAll('t').length).to.equal(1)
  })
})

describe('https://www.youtube.com/embed/qriPNsaplV4 parameter extraction and embedded URL generation', () => {
  it('Convert youtube/embed url as URL to embedded url', () => {
    // Arrange
    let sourceUrl = new URL('https://www.youtube.com/embed/qriPNsaplV4')
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/qriPNsaplV4')
    expect(Array.from(newURL.searchParams).length).to.equal(0)
  })

  it('Convert youtube/embed url as string to embedded url', () => {
    // Arrange
    let sourceUrl = 'https://www.youtube.com/embed/qriPNsaplV4'
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/qriPNsaplV4')
    expect(Array.from(newURL.searchParams).length).to.equal(0)
  })

  it('Convert youtube/embed url as URL with start time to embedded url', () => {// eslint-disable-line
    // Arrange
    let sourceUrl = new URL('https://www.youtube.com/embed/qriPNsaplV4?start=83')
    const t = new Test()
    // Act
    const newURL = t.ResolveAddress(sourceUrl)
    // Assert
    expect(newURL.host).to.equal('www.youtube.com')
    expect(newURL.pathname.startsWith('/embed/')).to.equal(true)
    expect(newURL.pathname).to.equal('/embed/qriPNsaplV4')
    expect(newURL.searchParams.has('start'))
    expect(newURL.searchParams.getAll('start').length).to.equal(1)
  })
})
describe('test Strategy retrieval based on data types ', () => {
  it('Convert youtu.be url as URL to embedded url', () => {
    // Arrange
    let sourceUrl = 42
    const t = new Test()
    let fcn = function () { t.ResolveAddress(sourceUrl) }
    // Act
    expect(fcn).to.throw(Error, 'Unable to process address 42')
  })
})

describe('Testing that encodeQueryData', () => {
  it('encodeQueryData returns correct strings - empty array.', () => { // eslint-disable-line
    const t = new Test()
    const data = {}
    expect(t.encodeQueryData(data)).to.equal('')
  })
  it('encodeQueryData returns correct strings - start=83.', () => { // eslint-disable-line
    const t = new Test()
    const data = { start: '83' }
    expect(t.encodeQueryData(data)).to.equal('start=83')
  })
  it('encodeQueryData returns correct strings - start=83.', () => { // eslint-disable-line
    const t = new Test()
    const data = { start: '83', end: '103' }
    expect(t.encodeQueryData(data)).to.equal('start=83&end=103')
  })
})
