const mongoose = require ('mongoose');
const userSchema = require ('./user');
const cartSchema = require('./cart');
const productSchema = require('./product');

const User = mongoose.model('User', userSchema);
const Cart = mongoose.model('Cart', cartSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
    User,
    Cart,
    Product
}