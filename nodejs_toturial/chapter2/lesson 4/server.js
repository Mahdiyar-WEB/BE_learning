const http = require("http");
const products = require("./data/products");

const PORT = 3000;

const server = http
  .createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/api/products") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(products));
      res.end();
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
