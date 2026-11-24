const fs = require("fs");
const ConnectToMongoDB = require("../utils/connectToDB");
const { ObjectId } = require("mongodb");

const getProductsCollection = async () => {
  const db = await new ConnectToMongoDB().get();
  const productsCollection = await db.collection("products");
  return productsCollection;
};

const getAllProduct = async () => {
  try {
    const productsCollection = await getProductsCollection();
    const products = await productsCollection
      .find({}, { sort: { _id: -1 } })
      .toArray();
    return products;
  } catch (error) {
    console.log(error.message);
  }
};

const findByTitle = async (title) => {
  try {
    const productsCollection = await getProductsCollection();
    const product = productsCollection.findOne({ title: title });
    return product;
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (product) => {
  try {
    const productsCollection = await getProductsCollection();
    await productsCollection.insertOne(product);
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
    const productsCollection = await getProductsCollection();
    await productsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data },
    );
    return {
      message: "product updated successfully",
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteProductById = async (id) => {
  try {
    const productsCollection = await getProductsCollection();
    await productsCollection.deleteOne({ _id: new ObjectId(id) });
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
