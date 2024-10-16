const Cart = require('../models/cart')

//update /CRUD functionality
// create a cart
const createCart = async (req, res) => {
    try {
        const cart = new Cart(req.body)
        await cart.save()
        return res.status(201).json(cart)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// "read" a cart by id
const getCartById = async (req, res) => {
    const cart = await Cart.findById(req.params.id)
    res.json(cart)
}

// update a cart using id
const updateCart = async (req, res) => {
    try {
        let { id } = req.params
        let cart = await Cart.findByIdAndUpdate(id, req.body, { new: true })
        if (cart) {
            return res.status(200).json(cart)
        }
        throw new Error("Cart not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// delete a cart using id
const deleteCart = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Cart.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cart deleted! :(")
        }
        throw new Error("Cart not found!")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    createCart,
    getCartById,
    updateCart,
    deleteCart
}