exports.run = (client, msg, args) => {
    const key = `${msg.guild.id}-${msg.author.id}`;
    return msg.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
  }