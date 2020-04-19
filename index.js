const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.port || 8081;

app.listen(port, () => {
  console.log("App listening on port: ", port);
});

module.exports = app; // for testing
