"use strict";

const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
  if (message.content === "what is my avatar") {
    message.reply(message.author.displayAvatarURL());
  }
  if (message.content === "!simp") {
    const attachment = new MessageAttachment(
      "https://i.postimg.cc/8CS7hmv8/s.jpg"
    );
    message.channel.send(attachment);
  }
  if (message.content === "how to embed") {
    const embed = new MessageEmbed()
      .setTitle("A slick title")
      .setColor(0xff0000)
      .setDescription("Hello it works");
    message.channel.send(embed);
  }
  if (message.content === "!HueHueHue") {
    const ayush = new MessageEmbed()
      .setTitle("x extremist x")
      .setColor(0xff0000)
      .setURL("https://www.instagram.com/x__extremist__x/")
      .setImage("https://i.postimg.cc/cL59DTWz/heu.jpg");
    message.channel.send(ayush);
  }
  if (message.content === "!BaeSuzy") {
    const ad = new MessageEmbed()
      .setTitle("Bae Suzy SIMP")
      .setColor(0xff0000)
      .setImage("https://i.postimg.cc/RF5vTLp7/fsf.jpg");
    message.channel.send(ad);
  }
  if (!message.guild) return;
  if (message.content.startsWith(!kick)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick("Optional reason that will display in the audit logs")
          .then(() => {
            message.reply(`Succesfully kicked ${user.tag}`);
          })
          .catch((err) => {
            message.reply("I was unable to kick the member");
            console.error(err.message);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
  if (message.content.startsWith("!ban")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: "They were asshole!",
          })
          .then(() => {
            message.reply(`Succesfully banned the asshole ${user.tag}`);
          })
          .catch((err) => {
            message.reply("I was unable to ban the asshole");
          });
      } else {
        message.reply("That asshole isn't in this guild");
      }
    } else {
      message.reply("You didn't mention the asshole to ban!");
    }
  }
});

client.login(process.env.TOKEN);
