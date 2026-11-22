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
      `${process.cwd()}/data/products.json`, //process.cwd() will refer to executed server.js address
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

const updateProductById = async (id, data) => {
  try {
    const selectedProduct = products.find((product) => product.id === id);
    console.log("🚀 ~ updateProductById ~ selectedProduct:", selectedProduct);
    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = { id: selectedProduct.id, ...data };
    await fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(products),
      (err) => {
        if (err) {
          throw new Error(err);
        }
      },
    );
    return {
      message: "product updated successfully",
      data: products[productIndex],
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteProductById = async (id) => {
  console.log("🚀 ~ deleteProductById ~ id:", id);

  try {
    const newProducts = products.filter((product) => product.id !== +id);
    await fs.writeFile(
      `${process.cwd()}/data/products.json`,
      JSON.stringify(newProducts),
      (err) => {
        if (err) {
          throw new Error(err);
        }
      },
    );
    return {
      message: "product deleted successfully",
    };
  } catch (error) {
    console.log(error);
  }
};

const ProductModel = {
  getAllProduct,
  findByTitle,
  addProduct,
  updateProductById,
  deleteProductById,
};

module.exports = ProductModel;
