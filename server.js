const express = require("express");

const app = express();

app.all("/", (req, res) => {
  res.send("Bot is running");
});

function live() {
  app.listen(3000, () => {
    console.log("server is running");
  });
}

module.exports = live;
