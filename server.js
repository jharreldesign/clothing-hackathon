const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()
const cartController = require('./controllers/cartController')
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')

app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.send("our pants!! they're on fire!!")
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })