var fiftyfifty = ["✅ You Won!", "❌ You Lost!"]

module.exports = {
  name: "f/f",
  category: "fun",
  run: async (client, message, args) => {
    var response = fiftyfifty[Math.floor(Math.random()*fiftyfifty.length)];
    message.channel.send(response);
  }
}
