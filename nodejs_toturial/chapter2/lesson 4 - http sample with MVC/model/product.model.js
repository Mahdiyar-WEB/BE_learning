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

const ProductModel = {
  getAllProduct,
  findByTitle,
};

module.exports = ProductModel;
