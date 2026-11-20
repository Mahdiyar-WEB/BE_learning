const { getAllProduct } = require("../model/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await getAllProduct()
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const ProductControllers = {
  getProducts,
};

module.exports = ProductControllers;
