const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("route /");
  //   res.send("Hello Express"); //text
  //   res.send("<h1>Hello Express</h1>"); // html
  res.send({ message: "Hello Express" }); // json
});

app.listen(3000, () => console.log("app lunched on port 3000"));
