const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)

describe('Unknown endpoint', () => {
  it('shows correct error message', async () => {
    const res = await api.get('/silly-address')

    expect(res.status).toBe(404)
    expect(res.body.error).toBe('unknown endpoint')
  })
})
