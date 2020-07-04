exports.run = (client, msg, args) => {
    // Limited to guild owner - adjust to your own preference!
    if(msg.author.id !== msg.guild.ownerID) 
    return msg.reply("You're not my supervisor!");

    const user = msg.mentions.users.first() || client.users.get(args[0]);
    if(!user) return msg.reply("You must mention someone or give their ID!");

    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd) 
      return msg.reply("You didn't tell me how many points to give...")

    // Ensure there is a points entry for this user.
    client.points.ensure(`${msg.guild.id}-${user.id}`, {
      user: msg.author.id,
      guild: msg.guild.id,
      points: 0,
      level: 1
    });

    // Get their current points.
    let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "points");
    userPoints += pointsToAdd;
    

    // And we save it!
    client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "points")

    msg.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userPoints} points.`);
  }