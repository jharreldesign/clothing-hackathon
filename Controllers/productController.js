// const Cart = require('../models/cart')
const Product = require('../models/product')
// const User = require('../models/user')

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
        return res.status(404).json({message: 'Products not found! Womp womp.'})
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
        return res.status(404).json({message: 'Jeans not found! Everyone, check your DNA!'})
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
        return res.status(404).json({message: "Leggings not found! Leggo find them!"})
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
    return res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

// products filtered at or below max price input
const getProductsMaxPrice = async (req, res)=> {
    try {
    const { max } = parseFloat(req.params)
    const products = await Product.filter(product => product.productPrice <= max)
    if (!products) {
        return res.status(404).json({message: "Products not found! Womp, womp." })
    }
    res.json(products)
    }   catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getProductsPriceAscending = async (req, res) => {
    try {
        const products = await Product.find().sort({ productPrice: 1 })
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "Products not found! Womp, womp." })
        }
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// on sale



// in stock
// low stock? 


// CRUD routes

// create a product
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        return res.status(201).json(product)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// update a product using id
const updateProduct = async (req, res) => {
    try {
        let { id } = req.params
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error("Product not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// delete a product using id
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Product deleted! :(")
        }
        throw new Error("Product not found!")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByBrand,
    getJeans,
    getSweatpants,
    getJoggers,
    getSkinnyJeans,
    getCargoPants,
    getCulottes,
    getLeggings,
    getFlarePants,
    getCulottes,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsMaxPrice,
    getProductsPriceAscending
}