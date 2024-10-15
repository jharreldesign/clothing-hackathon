const Cart = require('../models/cart')
const Product = require('../models/product')
const User = require('../models/user')

// const getAllProducts = async (req, res) => {
//     const products = await Product.find()
//     res.json(products)
// }

// const getProductById = async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     res.json(product)
// }

// const getProductsByBrand = async (req, res) => {
//     try {
//     const { brand } = req.params
//     const products = await Product.find({ brand: brand })
//     if (!brand) {
//         return res.status(404).json({message: 'products not found'})
//     }
//     res.json(products)
//     }   catch(error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// const getShortsProducts = async (req, res) => {
//     try {
//     const products = await Product.find({ type: 'shorts' })
//     if (!products) {
//         return res.status(404).json({message: 'products not found'})
//     }
//     res.json(products)
//     }   catch(error) {
//         res.status(500).json({message: error.message})
//     }
// }

// const getProductsByMaxPrice = async (req, res) => {
//     try {
//     const { max } = req.params
//     const price = await
//     }
// }

// const getProductsPriceAscending 