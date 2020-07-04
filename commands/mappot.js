const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    const ClaimsEmbed = {
        "image": {
          "url": "https://cdn.discordapp.com/attachments/702217739330388028/728058060291178527/hotv_claimmap.png"
        }
      };
      msg.channel.send("Claims Map", {embed: ClaimsEmbed });
}

