const { Client, RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "warn",
  category: "moderation",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

    if (args.length < 1) return message.author.send('You do need to warn someone, mate.');

    if (message.member.hasPermission("BAN_MEMBERS")) {

    const roleColor = "#FF0000"

    const embed = new RichEmbed()
                  .setTitle("Warning!")
                  .setColor(roleColor)
                  .setTimestamp()
                  .setDescription(stripIndents`**> Warned Member:** ${rMember}
                    **> Warned by :** ${message.author.username}
                    **> Warned in:** ${message.channel}
                    **> Warning Reason:** ${args.slice(1).join(" ")}`)

    message.channel.send(embed);
    } else {
      return message.channel.send(`Nice try ${message.member}, but you are not able to warn members.`)
    }
  }
}
