const {
  getAllProduct,
  findByTitle,
  addProduct,
  updateProductById,
  deleteProductById,
} = require("../model/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await getAllProduct();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const getProductByTitle = async (req, res) => {
  const title = req.url.split("/").reverse()[0];
  try {
    const product = await findByTitle(title);
    if (!product) {
      res.writeHead("404", { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({ message: `didn't find any product with this title` }),
      );
      res.end();
    }
    res.writeHead("200", { "Content-Type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {}
};

const createProduct = async (req, res) => {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const result = await addProduct({ id: Date.now(), ...JSON.parse(body) });
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    });
  } catch (error) {
    console.log("🚀 ~ createProduct ~ error:", error);
  }
};

const updateProduct = async (req, res) => {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const { id, ...productData } = JSON.parse(body);
      const result = await updateProductById(id, productData);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    });
  } catch (error) {}
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.url.split('/').reverse()[0];
    const result = await deleteProductById(id);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify(result));
    res.end();
  } catch (error) {
    console.log("🚀 ~ deleteProduct ~ error:", error);
  }
};

const ProductControllers = {
  getProducts,
  getProductByTitle,
  createProduct,
  updateProduct,
  deleteProduct,
};

module.exports = ProductControllers;
