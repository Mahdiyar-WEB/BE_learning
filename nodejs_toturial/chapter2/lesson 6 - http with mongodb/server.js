
const http = require("http");

const {
  getProducts,
  getProductByTitle,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/product.controllers");

const PORT = 3000;

const server = http
  .createServer((req, res) => {
    const { method, url } = req;

    switch (true) {
      case url === "/api/products" && method === "GET": {
        return getProducts(req, res);
      }

      case /^\/api\/products\/[a-zA-Z]{1,10}$/.test(url) &&
        method === "GET": {
        return getProductByTitle(req, res);
      }

      case /^\/api\/products\/[0-9a-zA-Z]{20,25}$/.test(url) &&
        method === "DELETE": {
        return deleteProduct(req, res);
      }

      case url === "/api/products" && method === "POST": {
        return createProduct(req, res);
      }

      case url === "/api/products" && method === "PUT": {
        return updateProduct(req, res);
      }

      default: {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({ message: "API not found, try /api/products" }),
        );
      }
    }
  })
  .listen(PORT, () => {
    console.log(
      `Products HTTP server launched on port ${PORT}, http://localhost:${PORT}`,
    );
  });
