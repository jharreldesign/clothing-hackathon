const db = require(`../db`);
const { User } = require(`../models`);
const { Cart } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

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
});

const exampleCart = await new Cart({
  userId: exampleUser._id,
  items: [
    {
      productId: "Product 1",
      quantity: 1,
    },
    {
      productId: "Product 2",
      quantity: 2,
    },
  ],
});

await exampleUser.save();
await exampleCart.save();
console.log("Example user created:", exampleUser);
console.log("Example cart created:", exampleCart);
