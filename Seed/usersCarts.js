const db = require("../db")
const { User, Cart } = require("../models")
const { createSearchIndex } = require("../models/cart")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const seedUsersAndCarts = async () => {
  try {
    await Cart.deleteMany()
    await User.deleteMany()
    const exampleCart = await new Cart({
      items: [
        {
          productId: "67113889b9ac8bc74f8446fb",
          quantity: 1,
        },
        {
          productId: "67113889b9ac8bc74f844704",
          quantity: 2,
        },
      ],
    }).save()

    const exampleUser = await new User({
      name: "John Doe",
      email: "john.doe@example.com",
      address: [
        {
          street: "123 Maple Street",
          city: "Springfield",
          state: "IL",
          zipCode: "62704",
          country: "USA",
        },
      ],
      phoneNumber: "555-123-4567",
      shoppingCart: exampleCart._id,
    }).save()

    exampleCart.userId = exampleUser._id
    await exampleCart.save()

    console.log("Example cart created:", exampleCart)
    console.log("Example user created:", exampleUser)
  } catch (error) {
    console.error("Error seeding users and carts:", error)
  } finally {
    db.close()
  }
}

seedUsersAndCarts()
