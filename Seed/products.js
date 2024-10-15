const db = require(`../db`);
const Product = require(`../models/product`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const products = [
  {
    productName: "Jean-Claude Van Pants",
    productDescription:
      "Action-packed jeans that kick butt! Slim fit, stretchy, and ready for any high-flying stunts you throw at them.",
    productPrice: 49.99,
    productCategory: "Jeans",
    stockQuantity: 120,
    imageUrl: "https://example.com/images/jean_claude_van_pants.jpg",
    brand: "ActionThreads",
    rating: "4.8",
    onSale: true,
    color: ["Blue", "Black", "Dark Wash"],
    size: ["S", "M", "L", "XL"],
  },
  {
    productName: "Sweat Dreams are Made of These",
    productDescription:
      "Soft, cozy sweatpants so comfortable you'll wonder if you're still dreaming. Warning: may cause spontaneous naps.",
    productPrice: 35.0,
    productCategory: "Sweatpants",
    stockQuantity: 150,
    imageUrl: "https://example.com/images/sweat_dreams_pants.jpg",
    brand: "NapWear",
    rating: "4.7",
    onSale: true,
    color: ["Heather Gray", "Navy"],
    size: ["S", "M", "L", "XL"],
  },
  {
    productName: "Cargo Not Found",
    productDescription:
      "We lost track of how many pockets these cargo pants have... Seriously, it’s like a black hole for your stuff.",
    productPrice: 42.99,
    productCategory: "Cargo Pants",
    stockQuantity: 80,
    imageUrl: "https://example.com/images/cargo_not_found.jpg",
    brand: "PocketZone",
    rating: "4.5",
    onSale: false,
    color: ["Olive", "Black", "Khaki"],
    size: ["M", "L", "XL"],
  },
  {
    productName: "Flare for the Dramatic",
    productDescription:
      "These bell-bottoms bring drama and flare to any outfit. Perfect for those moments when you need to make an entrance.",
    productPrice: 59.99,
    productCategory: "Flare Pants",
    stockQuantity: 65,
    imageUrl: "https://example.com/images/flare_for_the_dramatic.jpg",
    brand: "DramaQueen",
    rating: "4.9",
    onSale: false,
    color: ["Red", "Black", "Navy"],
    size: ["XS", "S", "M", "L"],
  },
  {
    productName: "Tight Squeeze",
    productDescription:
      "These skinny jeans are so tight, you'll wonder if they came with a can of oil. Stretchy for the brave-hearted!",
    productPrice: 39.99,
    productCategory: "Skinny Jeans",
    stockQuantity: 90,
    imageUrl: "https://example.com/images/tight_squeeze.jpg",
    brand: "SqueezeWear",
    rating: "4.3",
    onSale: true,
    color: ["Light Wash", "Dark Wash", "Black"],
    size: ["S", "M", "L"],
  },
  {
    productName: "Knit's a Hard Pants Life",
    productDescription:
      "Soft, knitted leggings that make life a little less hard. Perfect for lounging or conquering the world (in comfort).",
    productPrice: 29.99,
    productCategory: "Leggings",
    stockQuantity: 100,
    imageUrl: "https://example.com/images/knit_hard_pants_life.jpg",
    brand: "ComfyChic",
    rating: "4.6",
    onSale: true,
    color: ["Charcoal", "Burgundy", "Black"],
    size: ["S", "M", "L", "XL"],
  },
  {
    productName: "Culotta Here!",
    productDescription:
      "These wide-leg culottes are so breezy, you'll feel like you're on vacation – even if you're just getting groceries.",
    productPrice: 39.99,
    productCategory: "Culottes",
    stockQuantity: 70,
    imageUrl: "https://example.com/images/culotta_here.jpg",
    brand: "WindyCity",
    rating: "4.8",
    onSale: false,
    color: ["White", "Beige", "Teal"],
    size: ["XS", "S", "M"],
  },
  {
    productName: "The Fleece Awakens",
    productDescription:
      "Prepare for battle... with the cold! These fleece joggers will keep you warm, no matter how icy it gets out there.",
    productPrice: 45.0,
    productCategory: "Joggers",
    stockQuantity: 85,
    imageUrl: "https://example.com/images/fleece_awakens.jpg",
    brand: "ForceWear",
    rating: "4.9",
    onSale: true,
    color: ["Charcoal", "Black"],
    size: ["S", "M", "L", "XL"],
  },
  {
    productName: "Fit to be Tied",
    productDescription:
      "These drawstring pants are so comfortable, you'll be 'tied' to them forever. Adjustable waistband for the perfect fit.",
    productPrice: 32.5,
    productCategory: "Drawstring Pants",
    stockQuantity: 150,
    imageUrl: "https://example.com/images/fit_to_be_tied.jpg",
    brand: "TieStyle",
    rating: "4.4",
    onSale: true,
    color: ["Olive", "Navy", "Gray"],
    size: ["S", "M", "L", "XL"],
  },
  {
    productName: "Pants Labyrinth",
    productDescription:
      "Get lost in style with these intricately patterned pants. No need for a map, just confidence.",
    productPrice: 50.0,
    productCategory: "Patterned Pants",
    stockQuantity: 55,
    imageUrl: "https://example.com/images/pants_labyrinth.jpg",
    brand: "MazeWear",
    rating: "4.5",
    onSale: false,
    color: ["Black and White", "Red and Blue"],
    size: ["M", "L", "XL"],
  },
];

await Product.deleteMany();

await Product.insertMany(products);
console.log(`Created products!`);

const run = async () => {
  await main();
  db.close();
};

run();
