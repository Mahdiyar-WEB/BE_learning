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

const users = [
  { id: 1, name: "name 1" },
  { id: 2, name: "name 2" },
  { id: 3, name: "name 3" },
];

//param
// app.get("/users/:id", (req, res) => {
//   console.log("route /users/:id");
//   const { id } = req.params;

//   const user = users.find((user) => user.id == id);

//   if (!user) {
//     res.status(404).json({
//       message: "user not found",
//       statusCode: res.statusCode,
//     });
//   } else {
//     res.status(200).json({
//       message: "user found",
//       data: {
//         user,
//       },
//       statusCode: res.statusCode,
//     });
//   }
// });

//optional param: use {}
app.get("/users{/:id}", (req, res) => {
  console.log("route /users/:id?");
  const { id } = req.params;
  if (!!id) {
    const user = users.find((user) => user.id == id);

    if (!user) {
      res.status(404).json({
        message: "user not found",
        statusCode: res.statusCode,
      });
    } else {
      res.status(200).json({
        message: "user found",
        data: {
          user,
        },
        statusCode: res.statusCode,
      });
    }
  } else {
    res.status(200).json(users);
  }
});
app.listen(3000, () => console.log("app lunched on port 3000"));
