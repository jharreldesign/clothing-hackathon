const Cart = require('../models/cart')
const Product = require('../models/product')
const User = require('../models/user')

const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
}

const getProductsByBrand = async (req, res) => {
    try {
    const { brand } = req.params
    const products = await Product.find({ brand: brand })
    if (!brand) {
        return res.status(404).json({message: 'products not found'})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({ message: error.message })
    }
}

const getJeans = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Jeans' })
    if (!products) {
        return res.status(404).json({message: 'Jeans not found!'})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getSweatpants = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Sweatpants' })
    if (!products) {
        return res.status(404).json({message: 'Oh nooo, sweaty! Sweatpants not found!'})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getFlarePants = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Flare Pants' })
    if (!products) {
        return res.status(404).json({message: 'Uh, oh...Looks like you have no flair! Flare Pants not found!'})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getCargoPants = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Cargo Pants' })
    if (!products) {
        return res.status(404).json({message: 'Not our precious cargo! Cargo Pants not found!'})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getSkinnyJeans = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Skinny Jeans' })
    if (!products) {
        return res.status(404).json({message: "As it is not the 2000's, Skinny Jeans not found!"})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getCulottes = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Culottes' })
    if (!products) {
        return res.status(404).json({message: "Culoutta luck! Culottes not found!"})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getLeggings = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Leggings' })
    if (!products) {
        return res.status(404).json({message: "Leggings not found!"})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getJoggers = async (req, res) => {
    try {
    const products = await Product.find({ productCategory: 'Joggers' })
    if (!products) {
        return res.status(404).json({message: "You missed the marathon! Joggers not found!"})
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}



// const getProductsByMaxPrice = async (req, res) => {
//     try {
//     const { max } = req.params
//     const price = await
//     }
// }

// const getProductsPriceAscending 
// on sale
// in stock
// low stock? 

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByBrand,
    getJeans,
    getSweatpants,
    getSkinnyJeans,
    getCargoPants,
    getCulottes,
    getLeggings
}