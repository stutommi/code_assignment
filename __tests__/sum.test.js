const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)

describe('Sum returns correct', () => {
  it('sum and prime values with single valid argument (5)', async () => {
    const res = await api.get('/api/sum?numbers[]=5')

    expect(res.status).toBe(200)
    expect(res.body.isPrime).toBe(true)
    expect(res.body.result).toBe(5)
  })

  it('sum and prime values with multiple valid arguments (1, 2, 5)', async () => {
    const res = await api.get('/api/sum?numbers[]=1&numbers[]=2&numbers[]=5')

    expect(res.status).toBe(200)
    expect(res.body.isPrime).toBe(false)
    expect(res.body.result).toBe(8)
  })
  
  it('sum and prime values with multiple valid arguments (22, 2, 5)', async () => {
    const res = await api.get('/api/sum?numbers[]=22&numbers[]=2&numbers[]=5')

    expect(res.status).toBe(200)
    expect(res.body.isPrime).toBe(true)
    expect(res.body.result).toBe(29)
  })
  
  it('Returns correct error message with invalid arguments (1, f, 3)', async () => {
    const res = await api.get('/api/sum?numbers[]=1&numbers[]=f&numbers[]=3')

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('"f" is not a number!')
  })
})