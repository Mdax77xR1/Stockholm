/////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js');
const prefix = "^"
const client = new Discord.Client();
/////////////////////////////////////////////////////////////////////////
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("",{type: 'watching'})
    console.log('The Prince : xR1')
    console.log('The Prince : MdAx77x')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' xHu & O.Neil BOT Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });
  client.on('ready', () => {
     console.log(`----------------`);
        console.log(`Welcome to evil gates.`);
          console.log(`----------------`);
        console.log(`ON ${client.guilds.size} servers.`);
      console.log(`----------------`);
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`^Gangs | ^help | Servers: ${client.guilds.size}`,"https://www.twitch.tv/xR1")
  client.user.setStatus("dnd")
   
  });
  /////////////////////////////////////////////////////////
  client.on('message' , message => {
  
    if (message.content === '^help') {
               message.react('🤖')
             let embed = new Discord.RichEmbed()
    
          .setThumbnail(message.author.avatarURL)    
          .addField("**[❖══════【 __General Commands__ 】 ══════❖]**","** **")
         .addField("**● $Stockholm-info**","**【To See Info For Stockholm Gang.】***")
         .addField("**● $members**","**【To See Members Status.】***")
         .addField("**● $user**","**【user informations.】***")
         .addField("**● $profile**","***【your informations In The Server.】**")
         .addField("**● $ping**","**【bot's ping】***")
         .addField("**● $avatar**","**【Avatar service.】***")
         .addField("**● $botinfo**","**【the bot's informations.】***")
         .addField("**● $server**","**【server informations.】***")
         .addField("**● $clear**","**【clear the chat with a number 1-99.】***")
         .addField("**● $invites**","**【To See Your Invites】***")
         .addField("**[❖══════【 __Administrative Commands__ 】══════❖]**","** **")
         .addField("**● $crlog**","**【To Creat Log room.】***")
         .addField("**● $kick**","**【to kick someone.】**")
         .addField("**● $ban**","**【to ban someone.】**")
         .addField("**● $mute**","**【to mute someone.】**")
         .addField("**● $unmute**","**【to unmute someone.】**")
         .addField("**● $mvall**","**【to move all to your voice channel.】**")
         .addField("**● $move**","**【to move someone to your voice chanel.】**")


    
    
    
    
        .setColor('RANDOM')
      message.author.sendEmbed(embed);
        }
    });
    //////////////////
    client.on('message' , message => {
  
        if (message.content === '$help') {
                 let embed1 = new Discord.RichEmbed()
        
              .setThumbnail(message.author.avatarURL)        
              .addField("**● $sug**","**【To send Your Suggestion To Suggestions Room | Required channel named #suggestions . .】**")
              .addField("**● $allsug*","**【To See all Suggestions For Today .】**")
              .addField("**● $dsug [Suggest ID]*","**【Delete a specific suggestion.】**")
              .addField("**● $mc**","**【to mute the chat.】**")
              .addField("**● $unmc**","**【to unmute the chat.】**")
            .addField("**● $kv**","**【to kick someone from voice channel.】**")
            .addField("The Stockholm Bot Made By :","<@335484868479811584>")
            .addField("【Works on Heroku premium cloud.】","24/7 online")
     

        
        
        
            .setColor('RANDOM')
          message.author.sendEmbed(embed1);
            }
        });

    /////////////////////////////////////////////////////////////////////
    client.on('message', message => {
 
        var prefix = "$"
    
        var permissionskick = new Discord.RichEmbed()
    .setDescription("**You need ` KICK_MEMBERS ` Permission**")
    .setColor(`RANDOM`)
    
    var permissionskickv2 = new Discord.RichEmbed()
    .setTitle("**I should have ` KICK_MEMBERS ` Permission to do that. :x:**")
    .setColor(`RANDOM`)
    
    var mentionplz = new Discord.RichEmbed()
    .setTitle("**mention someone**")
    .setColor(`RANDOM`)
    
    var reasonplz = new Discord.RichEmbed()
    .setTitle("**with a reason please.**")
    .setColor(`RANDOM`)
    
    var rolehight = new Discord.RichEmbed()
    .setTitle("**holy crap, he higher than my role.**")
    .setColor(`RANDOM`)
    
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
    
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    let args = message.content.split(" ").slice(1);
    
    if (command == "kick") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
                 
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(permissionskick);
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply(permissionskickv2);
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply(mentionplz);
    if(!reason) return message.reply (reasonplz);
    if (!message.guild.member(user)
    .kickable) return message.reply(rolehight);
    
    message.guild.member(user).kick();
    
    const kickembed = new Discord.RichEmbed()
    .setAuthor(`KICKED!`, user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
        embed : kickembed
    })
    }
    });
    //////
    client.on('message', message => {
        var permissionskick = new Discord.RichEmbed()
        .setDescription("**You need ` BAN_MEMBERS ` Permission**")
        .setColor(`#36393e`)
        
        var permissionskickv2 = new Discord.RichEmbed()
        .setTitle("**I should have ` BAN_MEMBERS ` Permission to do that. :x:**")
        .setColor(`RANDOM`)
        
        var mentionplz = new Discord.RichEmbed()
        .setTitle("**mention someone**")
        .setColor(`RANDOM`)
        
        var reasonplz = new Discord.RichEmbed()
        .setTitle("**with a reason please.**")
        .setColor(`RANDOM`)
        
        var rolehight = new Discord.RichEmbed()
        .setTitle("**holy crap, he higher than my role.**")
        .setColor(`#RANDOM`)
    
        var prefix = "^"
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
    
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    let args = message.content.split(" ").slice(1);
    
    if (command == "ban") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
                 
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(permissionskick);
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(permissionskickv2);
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply(mentionplz);
    if(!reason) return message.reply (reasonplz);
    if (!message.guild.member(user)
    .bannable) return message.reply(rolehight);
    
    
    message.guild.member(user).ban(7, user);
    
    const banembed = new Discord.RichEmbed()
    .setAuthor(`BANNED!`, user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
    .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
    .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
        embed : banembed
    })
    }
    });
    //////////////////
    
client.on("message", message => {
  
    var prefix = "$";
    const command = message.content.split(" ")[0];
  
    if(command == prefix+"kv"){
  
        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
  
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }
  
    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        
  
  
    
      });
     });
    }
  });
  /////////////////////////////////////////
  client.on('message', function(msg) {
    
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**only for servers sorry.**');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('**Server name.: **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('**Server Region.:**',`**[ ${msg.guild.region} ]**`,true)
      .addField('** Roles.:**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('** Members count.:**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('** in the voice channels.:**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('** text channels.:**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('** Voice channels.:**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('** server owner.:**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('** server id:**',`**[ ${msg.guild.id} ]**`,true)
      .addField('** server created on.: **',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  client.on('message', function(msg) {
    
    if(msg.content.startsWith (prefix + 'count')) {
      if(!msg.channel.guild) return msg.reply('**only for servers sorry.**');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('** Members count.:**',`**[ ${msg.guild.memberCount} ]**`,true)
      msg.channel.send({embed:embed});
    }
  });
  ///////////////////////////////////
  client.on('message', message => {
  
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
  });
////////////////////
client.on('message', message => {
  
    if(!message.channel.guild) return;
  if (message.content.startsWith('^ping')) {
  if(!message.channel.guild) return;
  var msg = `${Date.now() - message.createdTimestamp}`
  var api = `${Math.round(client.ping)}`
  if (message.author.bot) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .addField('**Time Taken:**',msg + " ms 📶 ")
  .addField('**WebSocket:**',api + " ms 📶 ")
  message.channel.send({embed:embed});
  }
  });
  //////////////////////////
  client.on("message", msg => {
  
    var prefix = "$";
  if(msg.content.startsWith (prefix + "profile")) {
  if(!msg.channel.guild) return msg.reply('**:x: Only for servers sorry.**');         
  const embed = new Discord.RichEmbed();
  embed.addField(" name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("  id", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(' status', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('   playing ', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(' roles', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
  msg.channel.send({embed: embed})
  }
  });
  //////////////////////////////////
  client.on('message', message => {
  
    if (message.content.startsWith(`$botinfo`)) {
    message.channel.send({
    embed: new Discord.RichEmbed()
       .setAuthor(client.user.username,client.user.avatarURL)
       .setThumbnail(client.user.avatarURL)
       .setColor('RANDOM')
       .setTitle('``xHu & O.Neil BOT`` ')
       .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
       .addField('``servers``', [client.guilds.size], true)
       .addField('``channels``' , `[ ${client.channels.size} ]` , true)
       .addField('``Users``' ,`[ ${client.users.size} ]` , true)
       .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
       .addField('``My ID``' , `[ ${client.user.id} ]` , true)
       .addField('``My Prefix``' , `[ ^ ]` , true)
       .addField('``My Language``' , `[ JavaScript ]` , true)
       .addField('``Bot Version``' , `[1.0v]` , true)
  
      .setFooter('By | ✈ MdĄx7ź ♛ .#8085  | ')
    })
    }
    });

    client.on('message', message => {
  
        let args = message.content.split(" ").slice(1);
       if (message.content.startsWith('$clear')) {
                 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**You Dont Have `MANAGE_MESSAGES` Permission** | ❎ ");
      let tta = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.reply("**must less than 100**").then(messages => messages.delete(5000))
        if (!messagecount) return message.reply("**example: `^clear 5`**").then(messages => messages.delete(5000))
        message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
               const embed = new Discord.RichEmbed()
               .setColor('RANDOM')
                .setDescription(`\`${args}\` : just cleared.`)
      message.channel.send(embed).then(messages => messages.delete(5000));
      }
      });
      ///////////////////
      client.on('message', message => {
  
        if (message.content.startsWith('^help')){
             let meercy = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription("**check your DM / direct messages.**")
             
             
          message.channel.sendEmbed(meercy);
            }
        });
        ////////////////////////
        client.on('message', message => {
  
 
            if (message.content.startsWith('$mc')) {
                                   if(!message.channel.guild) return message.reply('** This command only for servers**');
            
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **Required `Manage_Messages` permission :x:**');
                      message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false
            
                      }).then(() => {
                          message.reply("**channel has been muted. :white_check_mark: **")
                      });
                        }
           //xR1 Bot
           if (message.content.startsWith('$unmc')) {
                                if(!message.channel.guild) return message.reply('** This command only for servers**');
            
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**Required `Manage_Messages` permission. :x:**');
                      message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: true
            
                      }).then(() => {
                          message.reply("**channel has been unmuted. :white_check_mark:**")
                      });
                        }
                        
                    });
///////////////////////////////////////////////////////////////
 
client.on('message', message=>{
    if(message.author.bot) return;
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'crlog')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log")
    if(log) return message.reply("**يوجد بالفعل روم اللوق**")
    if(!log) {
    message.guild.createChannel("log", "text").then(c=> {
        c.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
    })
})
message.channel.send("**✅ ,تم انشاء روم اللوق بنجــاح**")
    }
    }
     })
client.on('error', console.error);
 
client.on('messageDelete', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[MESSAGE DELETE]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('**[ROLE COLOR UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {
            let roleUpdate = new Discord.RichEmbed()
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate)
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[CHANNEL CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
   
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});
/////////////////////////////////////////////////////////////
client.on("message", async message => {
    var trans =[
        {q:"**___مـا مـعـنى كلمة___  `Train` ?**",a:"قطار"},
        {q:"**___مـا مـعـنى كلمة___ `Plane` ?**",a:"طائرة"},
        {q:"**___مـا مـعـنى كلمة___ `Home` ?**",a:"منزل"},
        {q:"**___مـا مـعـنى كلمة___ `Cook` ?**",a:"يطبخ"},
        {q:"**___مـا مـعـنى كلمة___ `Car` ?**",a:"سيارة"},
        {q:"**___مـا مـعـنى كلمة___ `Ask` ?**",a:"سؤال"},
        {q:"**___مـا مـعـنى كلمة___`afraid` ?**",a:"خائف"},
        {q:"**___مـا مـعـنى كلمة___ `Air` ?**",a:"هواء"},
        {q:"** ___مـا مـعـنى كلمة___`Always` ?**",a:"دائما"},
        {q:"**___مـا مـعـنى كلمة___`Never` ?**",a:"ابدا"},
        {q:"**___مـا مـعـنى كلمة___ `box` ?**",a:"صندوق"},
        {q:"**___مـا مـعـنى كلمة___`Space` ?**",a:"مساحة"},
        {q:"**___مـا مـعـنى كلمة___ `capitals` ?**",a:"عواصم"},
        {q:"**___مـا مـعـنى كلمة___ `Plane` ?**",a:"طائرة"},
        {q:"**___مـا مـعـنى كلمة___`difficult` ?**",a:"صعب"},
        {q:"**___مـا مـعـنى كلمة___`electricity` ?**",a:"كهرباء"},
        {q:"**___مـا مـعـنى كلمة___`example` ?**",a:"مثال"},
    
    
    
    ];
        if(message.content == prefix+"trans"){
            if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
            UserBlocked.add(message.guild.id)
            var ask = trans[Math.floor(Math.random() * trans.length)];
            let embed = new Discord.RichEmbed()
            .setTitle('Translation Question')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(ask.q);
            message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
            const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
                UserBlocked.delete(message.guild.id)
            msgs.forEach(result => {
               if(result.author.id == client.user.id) return;
               if(result.content == "trans") return
               if(result.content == ask.a){
                 let embeds = new Discord.RichEmbed()
                 .setTitle(' correct answer ✔️')
                 .setAuthor(message.author.username, message.author.avatarURL)
                 .setColor("RANDOM")
                 .setDescription(`**${result.author.username}**  correct answer ✔️`);
                    message.channel.sendEmbed(embeds);                return;
               } else {
     
                                      var embedx = new Discord.RichEmbed()
                    .setTitle('❌خطأ')
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setColor("RANDOM")
                    .setDescription(`**${result.author.username}** wrong answer `);
                    message.channel.sendEmbed(embedx);
               }
         });
      }
    });
///////////////////////////////////
client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
        if(message.content.startsWith(prefix + 'bc')) {
         let filter = m => m.author.id === message.author.id;
     
     let recembed = new Discord.RichEmbed()
     .setTitle(`${client.user.username}`)
     .setDescription(`
     -=-=-=-=-=-=-=-=-=-=
     🎖 Broadcast sends to a specific role without embed
     
     🏅 Broadcast sends to a specific role with embed
     
     📭 Broadcast sends for all members with embed
     
     📧 Broadcast sends for all members without embed
     
     🔵 Broadcast sends for online members only without embed
     
     🔷 Broadcast sends for online members only with embed
     
     ❌ To Cancel the process
     -=-=-=-=-=-=-=-=-=-=
     `)
     
     message.channel.sendEmbed(recembed).then(msg => {
         msg.react('🎖')
         .then(() => msg.react('🏅'))
         .then(() => msg.react('📭'))
         .then(() =>  msg.react('📧'))
         .then(() => msg.react('🔵'))
         .then(() => msg.react('🔷'))
         .then(() => msg.react('❌'))
     
     
                 let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
     
                 let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
     
                 let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
                 let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
     
                 let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
     
                 let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
     
                 let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
     
                 let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
     
                 let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
         
                 let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
     
                 let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
     
                 let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                     
                 let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
     
                 let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
     
     embedonlineonly.on('collect', r => {
     
        let msge;
        message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
       
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                   collected.first().delete();
                   msge = collected.first().content;
                   msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                     message.channel.awaitMessages(filter, {
                       max: 1,
                       time: 90000,
                       errors: ['time']
                     })
                     .then(collected => {
                       if(collected.first().content === 'yes') {
       message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
       
       
       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        var bc = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setTitle(`:mega: New Broadcast`)
               .addField('🔰Server🔰', message.guild.name)
               .addField('🚩Sender🚩', message.author.username)
               .addField('📜Message📜', `${msge}`)
               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
               .setFooter(client.user.username, client.user.avatarURL);
               m.send({ embed: bc })
               m.send(`${m}`)
               
           })
       }})
       if(collected.first().content === 'no') {
       message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        var bc = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setTitle(`:mega: New Broadcast`)
               .addField('🔰Server🔰', message.guild.name)
               .addField('🚩Sender🚩', message.author.username)
               .addField('📜Message📜', `${msge}`)
               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
               .setFooter(client.user.username, client.user.avatarURL);
               m.send({ embed: bc })
               
           })
       }
                     
       })
                   })
               })
           })
     
           
     onlineonly.on('collect', r => {
        let msge;
        message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
     
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ['time']
                  })
                  .then(collected => {
     
                    if(collected.first().content === 'yes') {
    message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                   
     
    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        m.send(`${msge}`)
    m.send(`${m}`)      
           
        })
    }
    if(collected.first().content === 'no') {
    message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        m.send(`${msge}`)
                   
        })}
    })
    })
            })
        })
    })
     
     embedmsg.on('collect', r => {
         let msge;
      message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                 msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
                     if(collected.first().content === 'yes') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     
     
         message.guild.members.forEach(m => {
             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send({ embed: bc })
             m.send(`${m}`)
             
         })
     }})
     if(collected.first().content === 'no') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.forEach(m => {
             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send({ embed: bc })
             
         })
     }
                   
     })
                 })
             })
         })
     
     
       
     
     
     
     normalmsg.on('collect', r => {
         let msge;
         message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                 msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
     
                     if(collected.first().content === 'yes') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                     
     
         message.guild.members.forEach(m => {
     m.send(`${msge}`)
     m.send(`${m}`)      
             
         })
     }
     if(collected.first().content === 'no') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.forEach(m => {
             m.send(`${msge}`)
                     
         })}
     })
     })
             })
         })
     })
     
     onlyrole.on('collect', r => {
         let msge;
         let role;
         message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
     
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                     msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                     message.channel.awaitMessages(filter, {
                         max: 1,
                         time: 90000,
                         errors: ['time']
                       })
             
             .then(collected => {
                 collected.first().delete();
                 role = collected.first().content;
                     let rolecheak = message.guild.roles.find('name', `${role}`)
                 msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
     
                     if(collected.first().content === 'yes') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                     
     
                 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
     
     m.send(`${msge}`)
     m.send(`${m}`)      
             
         })
     }
     if(collected.first().content === 'no') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
     
             m.send(`${msge}`)
                     
         })}
     })
     })
             })
         })
     })
     })
     });
     
     
     
     embedonlyrole.on('collect', r => {
         let msge;
         let role;
         message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
     
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                     msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                     message.channel.awaitMessages(filter, {
                         max: 1,
                         time: 90000,
                         errors: ['time']
                       })
             
             .then(collected => {
                 collected.first().delete();
                 role = collected.first().content;
                     let rolecheak = message.guild.roles.find('name', `${role}`)
                 msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
     
                     if(collected.first().content === 'yes') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                     
     
                         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send({ embed: bc })
     m.send(`${m}`)      
             
         })
     }
     if(collected.first().content === 'no') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send({ embed: bc })
             
                     
         })}
     })
     })
             })
         })
     })
     })
     })
         cancel.on('collect', r => {
             let cancelembed = new Discord.RichEmbed()
             .setTitle('Successfully Canceled :x:')
          message.channel.sendEmbed(cancelembed)
             embedmsg.stop();
             normalmsg.stop();
             onlyrole.stop();
             embedonlyrole.stop();
             embedonlineonly.stop()
             onlineonly.stop()
             cancel.stop();
         })
     })
        }});
        ///////////////////////

            client.on('message', message => {
                if (message.content.startsWith('$Stockholm-info')){
                    const xHu = "16";
                     let xHu1 = new Discord.RichEmbed()
                     .setTitle("=== ( Stockholm Gang ) ===")
                     .addField('Owner Of The Gang :',"IGN : __ Martinez A.Stockholm __ | Discord : ")            
                     .addField(`Co.Owner OF The Gang : `, "IGN : __ Arther A.Stockholm __  | Discord : ! Zero 💔#6146")
                     .addField("Count Of Gang Members  :",`__ ${xHu} __`)
                     .addField("Names Of Gang Members  :",`
                     1- Martinez A.Stockholm
                     2- Arther A.Stockholm
                     3- Marcos A.Stockholm
                     4- Guevara A.Stockholm
                     5- Richard A.Stockholm
                     6- Edison A.Stockholm
                     7- Junior A.Stockholm
                     8- Dmitry A.Stockholm
                     9- Neymare A.Stockholm
                     10- Alex A.Stockholm
                     11- Bartholmew A.Stockholm
                     12- Hector A.Stockholm
                     13- Robert A.Stockholm
                     14- Dife A.Stockholm
                     15- Hero A.Stockholm`)
                     .addField("Faction Name :",`__ xHu __`)
                  .setColor("RANDOM")
                  message.channel.sendEmbed(xHu1);
                    }
                });
////////////////////////////

client.on('message', async message =>{
  
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
        .setDescription(`${message.author}, mention someone.`)

if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "mute") {
      if (!message.channel.guild) return;
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: you need `MANAGE_MESSAGES` permission to do that savage thing.").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("i need `MANAGE_MESSAGES` permission. :x:").then(msg => msg.delete(5000));;
      let user = message.mentions.users.first();
  let muteRole = message.guild.roles.find("name", "Muted");
  if (!muteRole) return message.reply("**you should create role named `Muted`**").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.channel.send(embed).then(msg => {msg.delete(5000)});
message.channel.send(embed);

      let reason = message.content.split(" ").slice(2).join(" ");
      message.guild.member(user).addRole(muteRole);
      const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
      .addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
      .addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
      .addField("User", user, true)
      message.channel.send({embed : muteembed});
      var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(`      
${user} you are now muted. 
${message.author.tag} By
[ ${reason} ] : Reason
`)
      .setFooter(`Server : ${message.guild.name}`)
      .setColor("RANDOM")
  user.send( muteembeddm);
}
if(command === `unmute`) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: you need `MANAGE_MESSAGES` permission to do that savage thing.").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("I need`MANAGE_MESSAGES` permission.").then(msg => msg.delete(6000))

let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!toMute) return message.channel.sendMessage(":x: you should mention someone first.");

let role = message.guild.roles.find (r => r.name === "Muted");

if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: he's not muted.")

await toMute.removeRole(role)
message.channel.sendMessage("Successfully unmuted him. :white_check_mark:");

return;

}

});

/////////////////////////
client.on('message', message => {
    if (!message.channel.guild) return;
if (message.author.bot) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);

if (command === 'invites') {
message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
let ra3dx = new Discord.RichEmbed()
.setColor("RANDOM")
.addField('**: __عدد الاشخاص الذي دعوتهم هو__**',`${inviteCount}`)
message.channel.sendEmbed(ra3dx);


});
}});
const sug = require("./suggestions.json")
client.on("message", msg => {
    let message = msg;
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1);
            let caseid = Date.now() + msg.author.discriminator
    if (msg.content.startsWith(prefix + "sug" || msg.content.startsWith(prefix + "sug"))){
            let suggestionchat = msg.guild.channels.find(channel => channel.name === "suggestions") //حقوق مداكس

            let suggestion =  args.join(' '); // حقوق مداكس
            if(!suggestion) return message.channel.send('please set The Suggestion After The Command');
            if(!suggestionchat) return message.channel.send('I Couldnot find The Chat');
            let suggestionembed = new Discord.RichEmbed()
                .setAuthor(' 🔔 __New Suggestion!__ 🔔 ')
                .addField('From', `| **\n<@${message.author.id}>\n\n** |`, true)
                .addField('The Suggestion', `${suggestion}`)
                .setColor('RANDOM')
                .setFooter(`Suggest ID: ${Date.now() + msg.author.discriminator}`)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp();
            suggestionchat.send(suggestionembed).then(send =>{//حقوق مداكس
            sug[caseid] = {
                message: suggestion,
                by: msg.author.id,
                Time: message.createdAt,
                thisisimportant: send.id
               }
               fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err);
                })
              })
            message.channel.send("**suggestion submitted**")
              }
 
  if (msg.content.startsWith(prefix + "allsug")){//حقوق مداكس
    let data = undefined;
  for(i in sug){
      if (data === undefined) {
        data = "";
      }
      let data1 = sug[i].message
      let data2 = sug[i].by
      const stuff = `The suggestion : **${data1}** 
      **/By : **<@${data2}>`;
      data += (stuff) + "\n\n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("** The Suggestions for today 💭**", data)
      msg.channel.send(richEmbed)
    }else if(data === undefined) return message.channel.send("Couldn't find any suggestion")
  }
  if (msg.content.startsWith(prefix + "dsug")){
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        let that = args.join(' ')
        if(!that) return message.channel.send("Hmmm please put an id")
        if(sug[that] === undefined) return message.channel.send("Couldn't find that suggestion id!")
            message.channel.send("Deleted!")
            message.guild.channels.find(ch => ch.name === "sug").fetchMessage(sug[that].thisisimportant).then(msg => msg.delete());
            delete sug[that];
            fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err)
              })
            }
       
});
////////////////////////
client.on('message', message => {
  
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'move')) {
     if (message.member.hasPermission("MOVE_MEMBERS")) {
     if (message.mentions.users.size === 0) {
     return message.channel.send("``example : " +prefix+ "move [user]``")
    }
    if (message.member.voiceChannel != null) {
     if (message.mentions.members.first().voiceChannel != null) {
     var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
    var embed = new Discord.RichEmbed()
     .setTitle("Succes!")
     .setColor("RANDOM")
     .setDescription(`just moved <@${usermentioned}> to your channel voice. `)
    var embed = new Discord.RichEmbed()
    .setTitle(`You are Moved in ${message.guild.name}`)
     .setColor("RANDOM")
    .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
     message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
    message.guild.members.get(usermentioned).send(embed)
    } else {
    message.channel.send(""+ message.mentions.members.first() +" `he must in voice channel first.`")
    }
    } else {
     message.channel.send("**`you must in voice channel.`**")
    }
    } else {
    message.react("❌")
    }
     }
    });
/////////////////

client.on('message', message => {
  
    if(message.content.startsWith('$mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: you need have `MOVE_MEMBERS` permission :/ **');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I need `MOVE_MEMBERS` permission**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: successfully moved all to your channel/room**`)
  
  
     }
       });
       ////////////////
client.login(process.env.SYSTEM);
