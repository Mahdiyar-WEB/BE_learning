const products = require("../data/products");

const getAllProduct = async () => {
  try {
    return products;
  } catch (error) {
    console.log(error);
  }
};

const findByTitle = async (title) => {
  try {
    const product = await products.find((product) => {
      return product.title.includes(title.toString());
    });

    return product;
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (product) => {
  try {
    await products.push(product);
  } catch (error) {
    console.log("🚀 ~ addProduct ~ error:", error);
  }
};

const ProductModel = {
  getAllProduct,
  findByTitle,
  addProduct
};

module.exports = ProductModel;
