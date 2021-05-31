const express = require("express");

const app = express();

app.all("/", (req, res) => {
  res.send("Bot is running");
});

module.exports = live;
