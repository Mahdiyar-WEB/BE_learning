const products = require("../data/products");
const fs = require("fs");

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
    products.push(product);
    fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(products),
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
    return {
      message: "product created successfully",
      product: product,
    };
  } catch (error) {
    console.log("🚀 ~ addProduct ~ error:", error);
  }
};

const ProductModel = {
  getAllProduct,
  findByTitle,
  addProduct,
};

module.exports = ProductModel;
