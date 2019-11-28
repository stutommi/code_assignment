const express = require('express')
const isPrime = require('../helperFunctions')
const primeRouter = express.Router()

primeRouter.get('/:number', (req, res) => {
  const value = parseInt(req.params.number)

  if (Number.isNaN(value))
    return res.status(400).json({ error: `"${req.params.number}" is not a number!` })

  return res.status(200).json({ isPrime: isPrime(value) })
})

module.exports = primeRouter