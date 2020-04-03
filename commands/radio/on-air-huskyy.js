const { RichEmbed } = require("discord.js");

module.exports = {
  name: "on-air-huskyy",
  category: "radio",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    const roleColor = "#7FFF00"

      const embed12 = new RichEmbed()
                  .setTitle("Radio Status")
                  .setColor(roleColor)
                  .setDescription(`🟢 On-Air! @here`)
                  .setTimestamp()
                  .setFooter(`CMB Copyrights 2020`)
                  .addField('Music With Huskyy', 'Come and chill with me as we listen to some great music!', true)

      message.channel.send(embed12);
    }
  }
