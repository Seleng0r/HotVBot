exports.run = (client, msg, args) => {
    if(msg.member.roles.cache.some(r=>["Dev", "Mod", "Bad Bitch", "Proficient"].includes(r.name)));
        msg.channel.send('wg_01: unclaimed\n wg_02: unclaimed\n wg_03: unclaimed\n wg_04: unclaimed\n wg_05: Mothpot\n wg_06: unclaimed\n wg_07: unclaimed\n wg_08: unclaimed\n wg_09: c0dacan0n');
    }