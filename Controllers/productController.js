const Product = require("../models/product")

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "You set all the pants free!? Seriously!? No products found!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get single product by id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "You broke it!? Seriously!? No products found!" })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// get products by brand name
const getProductsByBrand = async (req, res) => {
  try {
    const { brand } = req.params
    const products = await Product.find({ brand: brand })
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Products not found! Womp womp." })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get all pants of a specific product category (13)
const getJeans = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Jeans" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Jeans not found! Everyone, check your DNA!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getSweatpants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Sweatpants" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Oh nooo, sweaty! Sweatpants not found!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getFlarePants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Flare Pants" })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message:
          "Uh, oh...Looks like you have no flair! Flare Pants not found!",
      })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getCargoPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Cargo Pants" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Not our precious cargo! Cargo Pants not found!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getSkinnyJeans = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Skinny Jeans" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "As it is not the 2000's, Skinny Jeans not found!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getCulottes = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Culottes" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Culoutta luck! Culottes not found!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getLeggings = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Leggings" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Leggings not found! Leggo find them!" })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getJoggers = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Joggers" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "You missed the marathon! Joggers not found!" })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getDrawstringPants = async (req, res) => {
  try {
    const products = await Product.find({
      productCategory: "Drawstring Pants",
    })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "It's a draw! Drawstring Pants not found!" })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getPatternedPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Patterned Pants" })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message:
          "This is starting to become a pattern...Patterned Pants not found!",
      })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getChinos = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Chinos" })
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Ruh roh! Chinos not found!" })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getPalazzoPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Palazzo Pants" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Dun dun DUNNNN. Palazzo Pants not found!" })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getLinenPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Linen Pants" })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message:
          "If these pants were a member of the Beatles, they'd be...John Linens. Anyway, Linen Pants not found!",
      })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get products filtered at or below max price input
const getProductsMaxPrice = async (req, res) => {
  try {
    const max = parseFloat(req.params.max)
    if (isNaN(max)) {
      return res.status(400).send("Please enter a valid maximum price");
  }
    const products = await Product.find()
    const sortedProducts = products.filter(product => product.productPrice <= max)
    if (!sortedProducts || sortedProducts.length === 0) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp, womp." })
    }
    res.json(sortedProducts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get products sorted by price ascending
const getProductsPriceAscending = async (req, res) => {
  try {
    const products = await Product.find().sort({ productPrice: 1 })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp, womp." })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get products sorted by price descending
const getProductsPriceDescending = async (req, res) => {
  try {
    const products = await Product.find().sort({ productPrice: -1 })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp, womp." })
    }
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get all products on sale
const getProductsOnSale = async (req, res) => {
  try {
    const products = await Product.find({ onSale: true })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "Looks like these pants sale'd away! No sale products found!",
      })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get all products low in stock
const getProductsLowStock = async (req, res) => {
  try {
    const products = await Product.find()
    const lowStock = products.filter(
      (product) => product.stockQuantity < 10 && product.stockQuantity >= 1
    )
    if (!lowStock || lowStock.length === 0) {
      return res.status(404).json({
        message:
          "No low-stock products found! We'll give our supply-chain peeps a raise.",
      })
    }
    return res.json(lowStock)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get products rated at or higher than 4.7
const getProductsHighlyRated = async (req, res) => {
  try {
    const products = await Product.find()
    const highlyRated = products.filter(
      (product) => parseFloat(product.rating) >= 4.7
    )
    if (!highlyRated || highlyRated.length === 0) {
      return res.status(404).json({
        message:
          "Products not found! Dont worry, you're stil highly rated to us.",
      })
    }
    return res.json(highlyRated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get products based on specific size
const getProductsS = async (req, res) => {
  try {
    const products = await Product.find({ size: "S" })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "No small pants found! All of our pants are a HUGE deal.",
      })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsM = async (req, res) => {
  try {
    const products = await Product.find({ size: "M" })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "No medium pants found! All of our pants are a HUGE deal.",
      })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsL = async (req, res) => {
  try {
    const products = await Product.find({ size: "L" })
    if (!products || products.length === 0) {
      return res.status(404).json({
        message:
          "No large pants found! All of our pants are an EXTRA LARGE deal.",
      })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsXL = async (req, res) => {
  try {
    const products = await Product.find({ size: "XL" })
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No extra large pants found! Extra large bummer! :(" })
    }
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
// get products by a specific color group
const getProductsBlues = async (req, res) => {
  try {
    const blues = await Product.find({
      color: {
        $in: [
          "Blue",
          "Red and Blue",
          "Navy",
          "Light Wash",
          "Dark Wash",
          "Dark Indigo",
          "Teal",
        ],
      },
    })
    if (!blues || blues.length === 0) {
      return res
        .status(404)
        .json({ message: "No blues found! That makes us blue. :(" })
    }
    return res.json(blues)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsGreens = async (req, res) => {
  try {
    const greens = await Product.find({
      color: { $in: ["Teal", "Olive", "Green"] },
    })
    if (!greens || greens.length === 0) {
      return res
        .status(404)
        .json({ message: "We're not big salad people...No greens found!" })
    }
    return res.json(greens)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsBlacks = async (req, res) => {
  try {
    const blacks = await Product.find({
      color: { $in: ["Black", "Dark Wash", "Black and White", "Faded Black"] },
    })
    if (!blacks || blacks.length === 0) {
      return res
        .status(404)
        .json({ message: "Dun dun DUNNNN. No black pants found!" })
    }
    return res.json(blacks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsGrayscale = async (req, res) => {
  try {
    const grayscale = await Product.find({
      color: { $in: ["Gray", "Heather Gray", "Charcoal", "White"] },
    })
    if (!grayscale || grayscale.length === 0) {
      return res.status(404).json({ message: "No grays found! Womp womp." })
    }
    return res.json(grayscale)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsReds = async (req, res) => {
  try {
    const reds = await Product.find({
      color: { $in: ["Red", "Burgundy", "Red and Blue"] },
    })
    if (!reds || reds.length === 0) {
      return res
        .status(404)
        .json({ message: "We're not reddy! No reds found!" })
    }
    return res.json(reds)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsNeutrals = async (req, res) => {
  try {
    const neutrals = await Product.find({
      color: { $in: ["Sand", "Brown", "Beige", "Khaki", "White"] },
    })
    if (!neutrals || neutrals.length === 0) {
      return res.status(404).json({
        message: "No neutrals found! We're feeling pretty neutral about it.",
      })
    }
    return res.json(neutrals)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductsMulticolored = async (req, res) => {
  try {
    const multicolored = await Product.find({
      color: { $in: ["Black and White", "Red and Blue"] },
    })
    if (!multicolored || multicolored.length === 0) {
      return res.status(404).json({
        message: "No multicolored pants found! Where has all the color gone...",
      })
    }
    return res.json(multicolored)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CUD functions below:
// create a product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    return res.status(201).json(product)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// update a product using id
const updateProduct = async (req, res) => {
  try {
    let { id } = req.params
    let product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
    if (product) {
      return res.status(200).json(product)
    }
    throw new Error("Product not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// delete a product using id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Product.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Product deleted! :(")
    }
    throw new Error("Product not found!")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByBrand,
  getJeans,
  getSweatpants,
  getJoggers,
  getSkinnyJeans,
  getCargoPants,
  getCulottes,
  getLeggings,
  getFlarePants,
  getDrawstringPants,
  getPatternedPants,
  getChinos,
  getPalazzoPants,
  getLinenPants,
  getProductsMaxPrice,
  getProductsPriceAscending,
  getProductsPriceDescending,
  getProductsOnSale,
  getProductsLowStock,
  getProductsHighlyRated,
  getProductsS,
  getProductsM,
  getProductsL,
  getProductsXL,
  getProductsBlues,
  getProductsGreens,
  getProductsBlacks,
  getProductsGrayscale,
  getProductsNeutrals,
  getProductsReds,
  getProductsMulticolored,
  createProduct,
  updateProduct,
  deleteProduct,
}