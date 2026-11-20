const products = require("../data/products");

const getAllProduct = async () => {
  try {
    return products;
  } catch (error) {
    console.log(error);
  }
};

const ProductModel = {
  getAllProduct,
};

module.exports = ProductModel;
