const express = require("express");

const app = express();
const cidades = require('./cidades.json');

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});


app.get("/cidades/getAll", (req, res) => {
  res.json(cidades);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;