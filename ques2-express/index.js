const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is my server , enter parameter after /");
});

app.get("/:param", (req, res) => {
  const param = req.params.param;
  res.send(`The parameter is ${param}`);
});

app.listen(3000, console.log("App is running on port 3000"));
