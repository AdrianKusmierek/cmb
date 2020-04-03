const { RichEmbed } = require("discord.js");

module.exports = {
  name: "say",
  category: "moderation",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    if (args.length < 1) return message.author.send('Nothing to say?');

    const roleColor = "#cc6600"

    if (args[0].toLowerCase() === "embed") {
      const embed12 = new RichEmbed()
                  .setTitle("CMB")
                  .setColor(roleColor)
                  .setDescription(args.slice(0).join(" "))
                  .setTimestamp()

      message.channel.send(embed12);
    } else {
      message.channel.send(args.join(" "))
    }
  }
}
