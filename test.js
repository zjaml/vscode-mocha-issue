var chai = require('chai') 
var expect = chai.expect
var chaiHttp = require( 'chai-http')
import server from './server/server'

chai.use(chaiHttp)

describe("User related API", function(){
  it("sign up with email already in use should be rejected.", function(done){
    chai.request(server)
      .post('/login')
      .send({ email: 'jz', password: 'zj' })
      .end((err, res) => {
        expect(res).to.have.deep.property('body.name', 'Jin')
        done()
      })
  })

  it("second test", function(){

  })
})
