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
    res.send("Our pants!! They're on fire!!")
})

// index routes
app.get('/products', productController.getAllProducts)
app.get('/users', userController.getAllUsers)

app.get('/products/leggings', productController.getLeggings)
app.get('/products/jeans', productController.getJeans)
app.get('/products/sweatpants', productController.getSweatpants)
app.get('/products/skinnyjeans', productController.getSkinnyJeans)
app.get('/products/cargopants', productController.getCargoPants)
app.get('/products/flarepants', productController.getFlarePants)
app.get('/products/culottes', productController.getCulottes)
app.get('/products/joggers', productController.getJoggers)
app.get('/products/drawstringpants', productController.getDrawstringPants)
app.get('/products/patternedpants', productController.getPatternedPants)
app.get('/products/chinos', productController.getChinos)
app.get('/products/palazzopants', productController.getPalazzoPants)
app.get('/products/linenpants', productController.getLinenPants)
app.get('/products/onSale', productController.getProductsOnSale)

app.get('/products/price/ascending', productController.getProductsPriceAscending)
app.get('/products/price/descending', productController.getProductsPriceDescending)
app.get('/products/rating/high', productController.getProductsHighlyRated)
app.get('/products/size/s', productController.getProductsS)
app.get('/products/size/m', productController.getProductsM)
app.get('/products/size/l', productController.getProductsL)
app.get('/products/size/xl', productController.getProductsXL)

// show routes
app.get('/products/:id', productController.getProductById)
app.get('/users/:id', userController.getUserById)

app.get('/products/brands/:brand', productController.getProductsByBrand)
app.get('/users/name/:name', userController.getUserByName)
app.get('/products/price/:max', productController.getProductsMaxPrice)

// crud routes
app.post('/product', productController.createProduct)
app.put('/product/:id', productController.updateProduct)
app.delete('/product/:id', productController.deleteProduct)


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })