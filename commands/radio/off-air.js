const { RichEmbed } = require("discord.js");

module.exports = {
  name: "off-air",
  category: "radio",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    const roleColor = "#FF0000"

      const embed12 = new RichEmbed()
                  .setTitle("Radio Status")
                  .setColor(roleColor)
                  .setDescription(`🔴 Off-Air! @here`)
                  .setTimestamp()
                  .setFooter(`CMB Copyrights 2020`)

      message.channel.send(embed12);
    }
  }
