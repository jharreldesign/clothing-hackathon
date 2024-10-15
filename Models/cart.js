const { Schema } = require("mongoose");

const Cart = new Schema(
  {
    userId: { type: String, required: true },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = Cart;
