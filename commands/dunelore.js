const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const DuneEmbed = {
        "image": {
          "url": "https://cdn.discordapp.com/attachments/704377825456554065/728731710598021221/unknown.png"
        }
      };
      msg.channel.send("Dune Lore", {embed: DuneEmbed });
}

