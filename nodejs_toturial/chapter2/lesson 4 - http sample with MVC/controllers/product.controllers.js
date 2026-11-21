const {
  getAllProduct,
  findByTitle,
  addProduct,
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
    const product = {
      title: "new Product",
      type: "new type",
      description: "description",
      filename: "0.jpg",
      height: 600,
      width: 400,
      price: 28.1,
      rating: 4,
    };
    await addProduct(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {
    console.log("🚀 ~ createProduct ~ error:", error);
  }
};

const ProductControllers = {
  getProducts,
  getProductByTitle,
  createProduct,
};

module.exports = ProductControllers;
