const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)

describe('Prime returns correct ', () => {
  it('prime value when argument is a prime number (23)', async () => {
    const res = await api.get('/api/isprime/23')

    expect(res.status).toBe(200)
    expect(res.body.isPrime).toBe(true)
  })
  
  it('prime value when argument is not a prime number (22)', async () => {
    const res = await api.get('/api/isprime/22')

    expect(res.status).toBe(200)
    expect(res.body.isPrime).toBe(false)
  })
  
  it('Returns correct error message with invalid arguments (notanumber)', async () => {
    const res = await api.get('/api/isprime/notanumber')

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('"notanumber" is not a number!')
  })
})