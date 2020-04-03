const { Client, RichEmbed } = require("discord.js");

module.exports = {
  name: "ann",
  category: "moderation",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    if (args.length < 1) return message.author.send('Nothing to announce?');

    const roleColor = "#00cc00"

    const embed = new RichEmbed()
                  .setTitle("Announcement!")
                  .setColor(roleColor)
                  .setDescription(args.slice(0).join(" "))
                  .setFooter(`Announced by ${message.author.username}`)

    message.channel.send(embed);
    }
  }
