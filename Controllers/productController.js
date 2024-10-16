const Product = require("../models/product");

// get all products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// get single product by id
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// get products by brand name
const getProductsByBrand = async (req, res) => {
  try {
    const { brand } = req.params;
    const products = await Product.find({ brand: brand });
    if (!brand) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp womp." });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all pants of a specific product category (13)
const getJeans = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Jeans" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Jeans not found! Everyone, check your DNA!" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSweatpants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Sweatpants" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Oh nooo, sweaty! Sweatpants not found!" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFlarePants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Flare Pants" });
    if (!products) {
      return res.status(404).json({
        message:
          "Uh, oh...Looks like you have no flair! Flare Pants not found!",
      });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCargoPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Cargo Pants" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Not our precious cargo! Cargo Pants not found!" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSkinnyJeans = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Skinny Jeans" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "As it is not the 2000's, Skinny Jeans not found!" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCulottes = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Culottes" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Culoutta luck! Culottes not found!" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLeggings = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Leggings" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Leggings not found! Leggo find them!" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getJoggers = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Joggers" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "You missed the marathon! Joggers not found!" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDrawstringPants = async (req, res) => {
  try {
    const products = await Product.find({
      productCategory: "Drawstring Pants",
    });
    if (!products) {
      return res
        .status(404)
        .json({ message: "It's a draw! Drawstring Pants not found!" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPatternedPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Patterned Pants" });
    if (!products) {
      return res.status(404).json({
        message:
          "This is starting to become a pattern...Patterned Pants not found!",
      });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChinos = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Chinos" });
    if (!products) {
      return res.status(404).json({ message: "Ruh roh! Chinos not found!" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPalazzoPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Palazzo Pants" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "Dun dun DUNNNN. Palazzo Pants not found!" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLinenPants = async (req, res) => {
  try {
    const products = await Product.find({ productCategory: "Linen Pants" });
    if (!products) {
      return res.status(404).json({
        message:
          "If these pants were a member of the Beatles, they'd be...John Linens. Anyway, Linen Pants not found!",
      });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get products filtered at or below max price input
const getProductsMaxPrice = async (req, res) => {
  try {
    const { max } = parseFloat(req.params);
    const products = await Product.filter(
      (product) => product.productPrice <= max
    );
    if (!products) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp, womp." });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get products sorted by price ascending
const getProductsPriceAscending = async (req, res) => {
  try {
    const products = await Product.find().sort({ productPrice: 1 });
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp, womp." });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get products sorted by price descending
const getProductsPriceDescending = async (req, res) => {
  try {
    const products = await Product.find().sort({ productPrice: -1 });
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "Products not found! Womp, womp." });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all products on sale
const getProductsOnSale = async (req, res) => {
  try {
    const products = await Product.find({ onSale: true });
    if (!products) {
      return res.status(404).json({
        message: "Looks like these pants sale'd away! No sale products found!",
      });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all products low in stock
const getProductsLowStock = async (req, res) => {
  try {
    const products = await Product.find();
    const lowStock = products.filter(
      (product) => product.stockQuantity < 10 && product.stockQuantity >= 1
    );
    if (!lowStock) {
      return res.status(404).json({
        message:
          "No low-stock products found! We'll give our supply-chain peeps a raise.",
      });
    }
    return res.json(lowStock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get products rated at or higher than 4.7
const getProductsHighlyRated = async (req, res) => {
  try {
    const products = await Product.find();
    const highlyrated = products.filter(
      (product) => parseFloat(product.rating) >= 4.7
    );
    if (!highlyrated) {
      return res.status(404).json({
        message:
          "Products not found! Dont worry, you're stil highly rated to us.",
      });
    }
    return res.json(highlyrated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get products based on specific size
const getProductsS = async (req, res) => {
  try {
    const products = await Product.find({ size: "S" });
    if (!products) {
      return res.status(404).json({
        message: "No small pants found! All of our pants are a HUGE deal.",
      });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsM = async (req, res) => {
  try {
    const products = await Product.find({ size: "M" });
    if (!products) {
      return res.status(404).json({
        message: "No medium pants found! All of our pants are a HUGE deal.",
      });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsL = async (req, res) => {
  try {
    const products = await Product.find({ size: "L" });
    if (!products) {
      return res.status(404).json({
        message:
          "No large pants found! All of our pants are an EXTRA LARGE deal.",
      });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsXL = async (req, res) => {
  try {
    const products = await Product.find({ size: "XL" });
    if (!products) {
      return res
        .status(404)
        .json({ message: "No extra large pants found! Extra bummer! :(" });
    }
    return res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// colors available
const blues = await Product.find({
  color: { $in: ["Blue", "Red and Blue", "Navy", "Dark Indigo", "Teal"] },
});
const greens = await Product.find({
  color: { $in: ["Teal", "Olive", "Green"] },
});

// CUD functions below:
// create a product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// update a product using id
const updateProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (product) {
      return res.status(200).json(product);
    }
    throw new Error("Product not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// delete a product using id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted! :(");
    }
    throw new Error("Product not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

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

  createProduct,
  updateProduct,
  deleteProduct,
};
