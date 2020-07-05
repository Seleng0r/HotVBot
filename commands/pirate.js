const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const PirateEmbed = {
        "image": {
          "url": "https://cdn.discordapp.com/attachments/704377825456554065/729027315895500891/20200704_103247.jpg"
        }
      };
      msg.channel.send("Pirate", {embed: PirateEmbed });
}