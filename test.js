const E = require('./dist/index')
const {expect} = require('chai')

// isArray
describe('isArray',()=>{
    it('isArray',(done)=>{
        expect(E.isArray('q')).to.be.false
        done();
    })
})

console.log(E)
