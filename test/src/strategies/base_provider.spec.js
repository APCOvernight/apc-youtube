const chai = require('chai')
chai.use(require('sinon-chai'))
const expect = chai.expect

const Base = require('../../../src/strategies/base_provider')

describe('Base class functionality', () => {
  it('Base Class prevents instantiation', () => {
    let fcn = function () {
      const instantiatedBaseClass = new Base()
      expect(instantiatedBaseClass).to.an('object')
    }
    expect(fcn).to.throw(Error, 'Cannot construct baseProvider instances directly - inherrit from this class and add SupportedHost and getoEmbedURL methods.')
  })
})
