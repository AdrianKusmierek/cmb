const { Discord } = require("discord.js");
const random_gif = [
'gifs/gif1.gif',
'gifs/gif2.gif',
'gifs/gif3.gif',
'gifs/gif4.gif',
'gifs/gif5.gif',
'gifs/gif6.gif',
'gifs/gif7.gif',
'gifs/gif8.gif',
'gifs/gif9.gif',
'gifs/gif10.gif' ]

module.exports = {
  name: "gif",
  category: "fun",
  run: async (client, message, args) => {
    message.channel.send({file: random_gif[Math.floor(Math.random()*random_gif.length)]});
  }
}
