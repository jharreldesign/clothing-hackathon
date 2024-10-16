const Cart = require("../models/cart")
const Product = require("../models/product")

// get all carts
const getAllCarts = async (req, res) => {
  const carts = await Cart.find()
  res.json(carts)
}

const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      `items.productId`
    )

    if (!cart) {
      return res.status(404).json({ message: "Cart not found!" })
    }

    res.json(cart)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CRUD functions below:
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

// read a cart by id (get cart by id)
const getCartById = async (req, res) => {
  const cart = await Cart.findById(req.params.id)
  res.json(cart)
}

// update a cart using id
const updateCart = async (req, res) => {
  try {
    let { id } = req.params
    let cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
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

// add item to Cart using Product id
// const addItemToCart = async (req, res) => {
//     try {
//         let cart = await Cart.findOne({ userId: req.user.id})
//         if (!cart) {
//             cart = new Cart({ userId: req.user.id, items: [] })
//         }
//         let newItemId = req.params.id
//         let items = cart.items
//         let exists = items.some(item => item.productId === newItemId)
//     if (exists) {
//         items = items.map(item => {
//             if (item.productId === newItemId) {
//                 item.quantity +- 1
//             }
//             return item
//         })
//     } else {
//         let newItem = {
//             productId: newItemId,
//             quantity: 1
//         }
//     }

//     }
//     if (!exists) {

//         items.push(newItem)
//         await cart.save()
//     }
//     return res.json(cart)

//    // if item id is already there, then update the quantity (colors/size control?)   if ()
//   //  += quantity

// }

module.exports = {
  getAllCarts,
  createCart,
  getCartById,
  updateCart,
  deleteCart,
  getCartByUserId,
  //    addItemToCart
}
