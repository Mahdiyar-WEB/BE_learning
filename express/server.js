const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("route /");
  res.statusCode = 200;
  //   res.send("Hello Express"); //text
  //   res.send("<h1>Hello Express</h1>"); // html
  res.send({ message: "Hello Express" }); // json
});

app.get("/products", (req, res) => {
  console.log("route /products");
  res.status(200).json({
    products: [
      { id: 1, title: "product 1" },
      { id: 2, title: "product 2" },
      { id: 3, title: "product 3" },
    ],
  });
});

app.listen(3000, () => console.log("app lunched on port 3000"));
