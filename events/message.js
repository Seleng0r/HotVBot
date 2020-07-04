module.exports = (client, msg) => {
  // Ignore all bots
  if (msg.author.bot) return;
  if (msg.guild) {
    const key = `${msg.guild.id}-${msg.author.id}`;
    // Triggers on new users we haven't seen before.
    client.points.ensure(`${msg.guild.id}-${msg.author.id}`, {
      user: msg.author.id,
      guild: msg.guild.id,
      points: 0,
      level: 1
    });
    
    client.points.inc(key, "points");
    
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
    
    // Act upon level up by sending a msg and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      msg.reply(`You've leveled up to level **${curLevel}**!`);
      client.points.set(key, curLevel, "level");
    }
  }

  // Ignore msgs not starting with the prefix (in config.json)
  if (msg.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, msg, args);
};