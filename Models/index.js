const mongoose = require("mongoose");
const User = require("./user");
const Cart = require("./cart");
const Product = require("./product"); // Now this is the model, not the schema

module.exports = {
  User,
  Cart,
  Product,
};
