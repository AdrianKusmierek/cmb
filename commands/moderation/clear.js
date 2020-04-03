const { Client } = require("discord.js");

module.exports = {
  name: "clear",
  category: "moderation",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    if (args.length < 1) return message.author.send('Nothing to clear?');

    const amount = args.join(' ');

    if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages({ limit: amount })
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
    }
  }
}
