require("dotenv").config();
console.log("Hello World");

const currentTime = Date.now();
console.log(currentTime);

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send('<h2 class="testing">Hello World!</h2>');
});

app.get("/instagram", (req, res) => {
  res.send("<h1>Ehtesham037_khan_</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
