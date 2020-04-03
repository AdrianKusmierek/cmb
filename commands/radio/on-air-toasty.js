const { RichEmbed } = require("discord.js");

module.exports = {
  name: "on-air-toasty",
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
                  .addField(`Toasty's Evenings`, `Let's have some dinner while we listen to the best tracks on the world! ;)`, true)

      message.channel.send(embed12);
    }
  }
