const express = require("express");

const app = express();

app.all("/", (req, res) => {
  res.send("Bot is running");
});

function live() {
  app.listen("https://incubusdisbot.herokuapp.com/", () => {
    console.log("The bot is up in the server");
  });
}

module.exports = live;
