const express = require('express')
const isPrime = require('../helperFunctions')
const sumRouter = express.Router()

sumRouter.get('/', (req, res) => {
  const parsedValueArray = req.query.numbers.map(n => parseInt(n))

  const invalidValueIndex = parsedValueArray.findIndex(Number.isNaN)
  
  if (invalidValueIndex !== -1)
    return res.status(400)
      .json({ error: `"${req.query.numbers[invalidValueIndex]}" is not a number!` })

  const sum = parsedValueArray.reduce((acc, cur) => acc + cur)
  return res.status(200).json({ result: sum, isPrime: isPrime(sum) })
})

module.exports = sumRouter