var options = ["Hello", "Sah", "Howdy", "Sup"]

module.exports = {
  name: "hello",
  aliases: ["hello", "hi", "howdy", "sah", "hai"],
  category: "community",
  run: async (client, message, args) => {
    var response = options[Math.floor(Math.random()*options.length)];
    message.channel.send(response);
  }
}
