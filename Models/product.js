const { Schema } = require ('mongoose');

const Product = new Schema (
    {
        productName: { type: String, required: true },
        productDescription: { type: String, required: true },
        productPrice: { type: Number, required: true },
        productCategory: { type: String, required: true },
        stockQuantity: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        brand: { type: String, required: true },
        rating: { type: String, required: true },
        onSale: { type: Boolean, required: true },
        color: { type: [String], required: true },
        size: { type: [String], required: true }
    },
    { timestamps: true }
)

module.exports = Product