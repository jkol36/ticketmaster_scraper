import './config'
import { expect } from 'chai'
import { searchTicketMaster } from './helpers'


describe('ticketmaster scraper', () => {
  it('should search ticket master for artist', done => {
    searchTicketMaster('luke bryan')
    .then(res => {
      console.log(res)
      expect(res.attractions[0].name).to.eq('Luke Bryan')
      done()
    })
    .catch(err => {
      console.log(err)
      done()
    })
  })
})


