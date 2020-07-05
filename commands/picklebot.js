const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const HotPotBotEmbed = {
        "image": {
          "url": "https://i.imgur.com/PZMmks6.png"
        }
      };
      msg.channel.send({embed: HotPotBotEmbed });
}