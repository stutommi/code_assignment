const express = require('express')
const morgan = require('morgan')
const sumRouter = require('./controllers/sum')
const primeRouter = require('./controllers/prime')

const app = express()

process.env.NODE_ENV === 'development' && app.use(morgan('tiny'))
app.use(express.static('public'))
app.use('/api/sum', sumRouter)
app.use('/api/is-prime', primeRouter)
app.use((_, res) => res.status(404).json({ error: 'unknown endpoint' }))

module.exports = app