const express = require("express");
const posts = require("./posts.json");

const app = express();

app.get("/posts", async (req, res) => {
  const { title } = req.query;

  if (!!title) {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase()),
    );

    filteredPosts.length > 0
      ? res.status(200).json(filteredPosts)
      : res.status(404).json({
          message: "post not found",
          error: res.statusCode,
        });
  } else {
    res.status(200).json(posts);
  }
});

app.listen(3000, () => console.log("app lunched on port 3000"));
