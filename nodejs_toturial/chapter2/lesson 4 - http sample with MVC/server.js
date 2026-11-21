const http = require("http");
const products = require("./data/products");
const {
  getProducts,
  getProductByTitle,
  createProduct,
} = require("./controllers/product.controllers");

const PORT = 3000;

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/api/products" && req.method === "GET") {
      getProducts(req, res);
    } else if (
      req.url.match(/\/api\/products\/[a-zA-Z]{1,10}/) &&
      req.method === "GET"
    ) {
      getProductByTitle(req, res);
    } else if (req.url === "/api/products" && req.method === "POST") {
      createProduct(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({ message: "API not found, try /api/products" }),
      );
      res.end();
    }
  })
  .listen(PORT, () =>
    console.log(
      `products http server lunched on port ${PORT}, http://localhost:${PORT}`,
    ),
  );
