import E from '../dist/index'
const {expect} = require('chai')

// isArray
describe('easyFP',()=>{
    it('isArray',(done)=>{
        expect(E.isArray('test')).to.be.false
        expect(E.isArray([1,2,3])).to.be.true
        done();
    })

    it('map',(done)=>{
        expect(E.map(x=>x*2)([1,2,3])).to.eql([2,4,6])
        done();
    })
})

console.log(E)
console.log(E.map(x=>x*2)([1,2,3]))
