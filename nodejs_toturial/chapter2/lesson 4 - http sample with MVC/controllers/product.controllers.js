const { getAllProduct, findByTitle } = require("../model/product.model");

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

const ProductControllers = {
  getProducts,
  getProductByTitle,
};

module.exports = ProductControllers;
