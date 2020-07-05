const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const ComradesEmbed = {
        "image": {
          "url": "https://cdn.discordapp.com/attachments/704377825456554065/728845309941383268/7_heads_of_velothi.jpg"
        }
      };
      msg.channel.send("Comrades", {embed: ComradesEmbed });
}