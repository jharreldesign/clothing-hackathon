const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
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
    shoppingCart: { type: Schema.Types.ObjectId, ref: "Cart" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
