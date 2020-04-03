const { Discord } = require("discord.js");
const { ffmpeg } = require("ffmpeg-static");
const { opusscript } = require("opusscript");

module.exports = {
  name: "leave",
  category: "radio",
  run: async (client, message, args) => {
    if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
    };
  }
}
