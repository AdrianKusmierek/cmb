const { RichEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "moderation",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();
    const roleColor = "#cc6600"
    const embed1 = new RichEmbed()
              .setTitle("Commands")
              .setDescription("All the commands that are ready for use:")
              .setColor(roleColor)
              .addField('Ping', 'Use the command *ping to see your internet ping!', true)
              .addField('WhoIs', 'Use the command *whois <id/mention> to see information about him/her.', true)
              .addBlankField()
              .addField('Report', 'Use the command *report <id/mention> <reason> to report poeple breaking the rules!', true)
              .addField('Gif', 'Type *gif to see some cool gifs!!', true);

    message.channel.send(embed1);
  }
}
