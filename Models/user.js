const { Schema } = require ('mongoose');

const User = new Schema (
    {
        name: { type: String, required: true },
        email: { type: String, required: true},
        address: [
            {
                street: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                zipCode: { type: String, required: true },
                country: { type: String, required: true },
            },
        ],
        phoneNumber: { type: String, required: true },
        shoppingCart: { type: Schema.Types.ObjectId, ref: 'Cart'}
        //wishlist: { type: [String], required: true },
        //orderHistory: { type: [String], required: true }
    },
    { timestamps: true }
)

module.exports = User