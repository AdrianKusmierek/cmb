const { Client, Discord } = require("discord.js");

module.exports = {
  name: "nick",
  category: "community",
  run: async (client, message, args) => {
    message.user.setUsername(args.slice(0).join(" "))
  }
}
