const http = require("http");
const products = require("./data/products");
const { getProducts } = require("./controllers/product.controllers");

const PORT = 3000;

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/api/products") {
      getProducts(req, res);
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
      `products http server lunched on port ${PORT}, http:localhost:${PORT}`,
    ),
  );
