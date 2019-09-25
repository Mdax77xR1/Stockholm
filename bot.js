/////////////////////////////////////////////////////////////////////////
const fs = require("fs"); 
const adminprefix = "^";
const UserBlocked = new Set();
const jimp = require('jimp');   
const Discord = require('discord.js');
const prefix = "$"
const client = new Discord.Client();
const hero = new Discord.Client();
const points = {};
 const pretty = require('pretty-ms') 
,ti={}  
,spee={}; 
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
    console.log('  D.Papel BOT Is Online')
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
  client.user.setGame(`D.Papel Gang | $help`,"https://www.twitch.tv/xR1")
  client.user.setStatus("dnd")
   
  });
  /////////////////////////////////////////////////////////
  client.on('message' , message => {
  
    if (message.content === '$help') {
               message.react('🤖')
             let embedxx = new Discord.RichEmbed()
    
          .setThumbnail(message.author.avatarURL)    
          .addField("**[❖══════【 __General Commands__. 】 ══════❖]**","** **")
         .addField("**● $D.Papel-info**","**【To See Info For D.Papel Gang.】***")
         .addField("**● ^chinfo [Chaneel Name !.]**","**【Room information 】**")
         .addField("**● $members**","**【To See Members Status.】***")
         .addField("**● $user**","**【user informations.】***")
         .addField("**● $profile**","***【your informations In The Server.】**")
         .addField("**● $ping**","**【bot's ping】***")
         .addField("**● $avatar**","**【Avatar service.】***")
         .addField("**● $sug**","**【To send Your Suggestion To Suggestions Room | Required channel named #suggestions . .】**")
         .addField("**● $allsug*","**【To See all Suggestions For Today .】**")
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
         .addField("**● ^cv**","**【To Creat Voice Room.】**")
        .addField("**● ^ct**","**【To Creat Text Room.】**")


    
    
    
    
        .setColor('RANDOM')
      message.author.sendEmbed(embedxx);
        }
    });
    //////////////////
    client.on('message' , message => {
  
        if (message.content === '$help') {
                 let embed1234 = new Discord.RichEmbed()
        
              .setThumbnail(message.author.avatarURL)   
        .addField("**● $games-list**","**【To See The list For Games .】***")
              .addField("**● ^warn**","**【Required channel named `#warn-log` and role named `Warner`And `warn` to works.】***")     
              .addField("**● $mc**","**【to mute the chat.】**")
              .addField("**● $unmc**","**【to unmute the chat.】**")
            .addField("**● $kv**","**【to kick someone from voice channel.】**")
    .addField("The D.Papel Bot Made By :","<@335484868479811584> | Robert A.D.Papel")
    .addField("【Works on Heroku premium cloud.】","24/7 online")





     

        
        
        
            .setColor('RANDOM')
          message.author.sendEmbed(embed1234);
            }
        });


client.on('message' , message => {
  if (message.content === '$games-list') {
           let embed = new Discord.RichEmbed()
  
        .setThumbnail(message.author.avatarURL)    
            .addField("**۩ஜ▬▬▬▬✦__Games Commands__✦▬▬▬▬ஜ۩**","** **")
            .addField("**❖ $MTA-QA**","**Question & Answer Game **")
            .addField("**❖$trans**","**Translation Game**")
            .addField("**❖$xo **","**X & O Game**")
            .addField("**❖$fkk**","**Break the sentences**")
            .addField("**۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩**","** **")
     
      .setColor('RANDOM')
    message.author.sendEmbed(embed);
      }
  });


    /////////////////////////////////////////////////////////////////////
    client.on("message", (message) => {
        if (message.content.startsWith("$ct")) {
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                let args = message.content.split(" ").slice(1);
            message.guild.createChannel(args.join(' '), 'text');
            message.channel.sendMessage('تـم إنـشاء روم كتابي')
            
        }
        });
/////////////////
client.on("message", (message) => {
        if (message.content.startsWith("$cv")) {
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                let args = message.content.split(" ").slice(1);
            message.guild.createChannel(args.join(' '), 'voice');
            message.channel.sendMessage('تـم إنـشاء روم صوتي')
            
        }
        });
    /////////////////////////
    client.on("message", message => { 
  
        if(message.channel.type === 'dm') return;
      let messagearray = message.content.split(" ");
      let rank = message.guild.member(message.author).roles.find('name', 'Warner');
      
      let cmd = messagearray[0];
      let args = messagearray.slice(1);
      if(cmd === `$warn`){
      
        if (!rank) return message.channel.send('**You Dont Have `Warner` Role**');
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("**Couldn't find user**");
          let reason = args.join(" ").slice(22);
          if(!reason) return message.channel.send('**What Is The Reason**');
      
          let reportembed = new Discord.RichEmbed()
          .setTitle('========== ( New Warn ) ===========')
          .setThumbnail(`${message.author.avatarURL}`)
          .setColor("BLACK")
          .addField("[ Warned User] ", `[${rUser}]`)
          .addField("[ Warned By ]", `[${message.author}]`)
          .addField("[ In Channel ]", `[${message.channel}]`)
          .addField("[ Reason ]",`[${reason}]`)
          .setFooter(`Made By : ✈ MdĄx7ź ♛ .#8085 `)
          
          
          let WarnChannel = message.guild.channels.find(`name`,"warn-log");
          
          message.delete().catch(O_o=>{});
          WarnChannel.send(reportembed);
          let role12 = message.guild.roles.find('name', 'warn');
          rUser.addRole(role12);
          
              return;
          }
          });
    /////////////////
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
      .setFooter('Made By | ✈ MdĄx7ź ♛ .#8085  | ')
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
  if (message.content.startsWith('$ping')) {
  if(!message.channel.guild) return;
  var msg = `${Date.now() - message.createdTimestamp}`
  var api = `${Math.round(client.ping)}`
  if (message.author.bot) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .addField('**Time Taken:**',msg + " ms 📶 ")
  .addField('**WebSocket:**',api + " ms 📶 ")
  .setFooter('Made By | ✈ MdĄx7ź ♛ .#8085  | ')
  message.channel.send({embed:embed});
  }
  });
  //////////////////////////
  client.on("message", msg => {
  
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
       .setTitle('``D.Papel  BOT`` ')
       .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
       .addField('``servers``', [client.guilds.size], true)
       .addField('``channels``' , `[ ${client.channels.size} ]` , true)
       .addField('``Users``' ,`[ ${client.users.size} ]` , true)
       .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
       .addField('``My ID``' , `[ ${client.user.id} ]` , true)
       .addField('``My Prefix``' , `[ ^ ]` , true)
       .addField('``My Language``' , `[ JavaScript ]` , true)
       .addField('``Bot Version``' , `[1.0v]` , true)
  
      .setFooter('Made By | ✈ MdĄx7ź ♛ .#8085  | ')
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
  
        if (message.content.startsWith('$help')){
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
 
/////////////////////////////////////////////////////////////

///////////////////////////////////

        ///////////////////////

            client.on('message', message => {
                if (message.content.startsWith('$D.Papel-info')){
                     let DPapel2 = new Discord.RichEmbed()
                     .setTitle("=== ( D.Papel Gang ) ===")
                     .addField('Owner Of The Gang :',"IGN : __ Soon __ | Discord : ")            
                     .addField(`Co.Owner OF The Gang : `, "IGN : __ __  | Discord : ")
                     .addField("Count Of Gang Members  :",`__ Sooon __`)
                     .addField("Names Of Gang Members  :",`Sooon`)
                     .addField("Faction Name :",`__  __`)
                     .setFooter('Made By | ✈ MdĄx7ź ♛ .#8085  | ')

                  .setColor("RANDOM")
                  message.channel.sendEmbed(DPapel2);
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
if(command === `$unmute`) {
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
//////////////////////

client.on('message', message => {
    if (!message.channel.guild) return;
  if(message.content =='$members')
  var kayan = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setFooter(message.author.username, message.author.avatarURL)
  .setTitle('🌷| Members info')
  .addBlankField(true)
  .addField('📗| Online',
  `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
  .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
  .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
  .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
  .addField('➡| Server Members',`${message.guild.memberCount}`)
  message.channel.send(kayan);
  
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
    ///////////
    client.on('message', message => {
        if (message.content.startsWith('السلام عليكم')){
             let ra3d = new Discord.RichEmbed()
          .setColor("#e9ab26")
          .setDescription("**وعليكم السلام ورحمة الله وبركاتة:black_heart:**")
             
             
          message.channel.sendEmbed(ra3d);
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
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("Hey i'am D.Papel BOT to see my command list please Type `$help`");
    }
});
//////////
client.on('message', message => {
  
          

    if (message.content.startsWith(prefix + "user")) {
     
     if(!message.channel.guild) return message.reply(`only for servers.`);
  
         message.guild.fetchInvites().then(invs => {
  let member = client.guilds.get(message.guild.id).members.get(message.author.id);
  let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
  let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
  var moment = require('moment');
  var args = message.content.split(" ").slice(1);
  let user = message.mentions.users.first();
  var men = message.mentions.users.first();
  var heg;
  if(men) {
  heg = men
  } else {
  heg = message.author
  }
  var mentionned = message.mentions.members.first();
  var h;
  if(mentionned) {
  h = mentionned
  } else {
  h = message.member
  }
  moment.locale('ar-TN');
  var id = new  Discord.RichEmbed()
  
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField('you joined discordapp since: ',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
  .addField('you joined this server since: ', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
  .addField(`you have invited: `, ` ${inviteCount} `)
  
  
  .setFooter(message.author.username, message.author.avatarURL)  
  message.channel.sendEmbed(id);
  })
  }
  
  
  
  });
  ///////////
  client.on('message',message => {
  

    if (true) {
  
  if (message.content === '$binv') {
  
        message.author.send('https://discordapp.com/oauth2/authorize?client_id=601060544384073750&permissions=8&scope=bot| This is my invite link :).    ').catch(e =>console.log(e.stack));
  
   
  
      }
  
     }
  
    });
  
   
  
   
  
  client.on('message', message => {
    
  
       if (message.content === "$binv") {
  
       let embed = new Discord.RichEmbed()
  
    .setAuthor(message.author.username)
  
    .setColor("RANDOM")
  
    .addField(" Done | check your dm.")
  
       
  
       
  
       
  
    message.channel.sendEmbed(embed);
  
      }
  
  });
  ///////////////////
  
   client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
     .setThumbnail(member.user.avatarURL)
   .addField("***UserName.***" ,member.user.username )
       .setTitle('========= ( New Member !.) ======')
       .setDescription('Welcome To Our Server , Have a good Time :heart: :rose:')
       .addField('**Member Id**:', member.user.id, true)
       .addField('**Member Tag**:', member.user.discriminator, true)
       .addField('**Account Created in** :', member.user.createdAt, true)
       .addField(' :bust_in_silhouette:  Your Number Is ',`**[ ${member.guild.memberCount} ]:hearts:**`,true)
     .setFooter('Made By : ✈ MdĄx7ź ♛ .#8085 ')
   .setImage(`https://cdn.discordapp.com/attachments/601061050493698079/601425429424898090/unknown.png`)
     .setColor('RANDOM')

var channel =member.guild.channels.find('name', 'welcome')//حط اسم رووم هنا
if (!channel) return;
channel.send({embed : embed});
});



  //////////////
  client.on("message", async message => {
    if(message.content.startsWith(prefix + "chinfo")) {//حقوق مداكس
      if(!message.guild) return;
        var channelName = message.content.split(" ").slice(1).join(" ");
        if(!channelName) return message.channel.send("Provide a channel name. [ Without mention ]").catch(err => console.error(err));
        var channelTarget = message.guild.channels.find(c => c.name == channelName);
        if(!channelTarget) return message.channel.send(`Couldn't find a channel called ${channelName}`).catch(err => console.error(err));
       if(channelTarget.type == "category") {
         return message.channel.send("Categories aren't part of this.").catch(err => console.error(err));
       }
       var time = new Date().getTime() - message.guild.createdAt.getTime();
         var since = time / 1000 / 60 / 60 /24;
           const embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.displayAvatarURL)
             .setColor("BLACK")
             .setTitle("Channel Info.")
             .addField("Name", channelTarget.name, true)
             .addField("ID", channelTarget.id, true)
             .addField("Type", channelTarget.type.toUpperCase(), true)
             .addField("Topic", channelTarget.topic || "None", true)
             .addField("Position", channelTarget.position, true)
             .addField("Created At", "Since " + since.toFixed(0) + " Days.", true)
             .addField("Members", channelTarget.members.size + " Members.", true)
             .setFooter('Made By | ✈ MdĄx7ź ♛ .#8085| ')
             .setTimestamp();
   
             message.channel.sendEmbed(embed).catch(err => console.log(`Couldn't send a message to [ ${message.channel.id} ].`));
   
   }
   });
  /////////////////////////
client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);

if (command == "say") {

    let say = new Discord.RichEmbed()

    .setDescription(args.join(" "))

    .setColor(0x23b2d6)

    message.channel.sendEmbed(say);

    message.delete();

  }



});



client.on("message", async message => { // Mdax7zx .
    var MdAx7zxGame =[
        {q:"**`ماهو اقوى سلاح رشاش في شوب الاسلحه ؟ *الاجابه بـ العربي*ا`**",a:"اي كي"},  
        {q:"*`كم سعر سلاح الكولت ملاحظه الاجابه من رقمين فقط`**",a:"30"},    
        {q:"*`كم سعر سلاح الشتقن ملاحظه الاجابه من رقمين فقط`**",a:"40"},    
      {q:"*`كم سعر سلاح الاي كي ملاحظه الاجابه من رقمين فقط`**",a:"60"},
{q:"*`كم سعر سلاح التيك ملاحظه الاجابه من رقمين فقط`**",a:"35"},
 {q:"*`كم سعر سلاح اليوزي ملاحظه الاجابه من رقمين فقط`**",a:"35"},
    // Mdax7zx .
  
    ];
        if(message.content == prefix+"QA"){ // Mdax7zx .
            if(UserBlocked.has(message.guild.id)) return message.channel.send("أنتظر قليلاً .")
            UserBlocked.add(message.guild.id)
            var MdAx7zxGame2 = MdAx7zxGame[Math.floor(Math.random() * MdAx7zxGame.length)];
            let E2MdĄx7ź = new Discord.RichEmbed()
            .setTitle('Q & A')// Mdax7zx . 
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(MdAx7zxGame2.q)
            .setFooter("This Code Was Edited By : ✈ MdĄx7ź ♛ .#8085 "); /// Mdax7zx .
            message.channel.sendEmbed(E2MdĄx7ź).then(msg=> msg.delete(20000))
            const xR1 = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
            xR1.forEach(result => {
               if(result.author.id == client.user.id) return;
               if(result.content == "QA") return
               if(result.content == MdAx7zxGame2.a){
                 let E3MdĄx7ź = new Discord.RichEmbed()
                 .setTitle('=======(The Answer Is Correct)=======')
                 .addField(':white_check_mark: اجابة صحيحة',"==================")
                 .setColor("RANDOM")
                 .setFooter(`Requested By | ${message.author.tag}`) // Mdax7zx .

                 message.channel.sendEmbed(E3MdĄx7ź);                return;
               } else {
     
                                      var E4MdĄx7ź = new Discord.RichEmbed()
                    .setTitle('=====(Error404)=====')
                    .addField(':x:الإجابة خاطئة',"==============")
                    .setColor("RANDOM")
                    .setFooter(`Requested By | ${message.author.tag}`) // Mdax7zx .
                      message.channel.sendEmbed(E4MdĄx7ź);
               }
         });
      }
    });

client.on("message", async message => {
      var trans =[
          {q:"**ما معنى `Train` ?**",a:"قطار"},
          {q:"**ما معنى `Plane` ?**",a:"طائرة"},
          {q:"**ما معنى `Home` ?**",a:"منزل"},
          {q:"**ما معنى `Cook` ?**",a:"يطبخ"},
          {q:"**ما معنى `Car` ?**",a:"سيارة"},
          {q:"**ما معنى `Ask` ?**",a:"سؤال"},
          {q:"**ما معنى `afraid` ?**",a:"خائف"},
          {q:"**ما معنى `Air` ?**",a:"هواء"},
          {q:"**ما معنى `Always` ?**",a:"دائما"},
          {q:"**ما معنى `Never` ?**",a:"ابدا"},
          {q:"**ما معنى `box` ?**",a:"صندوق"},
          {q:"**ما معنى `Space` ?**",a:"فراغ"},
          {q:"**ما معنى `File` ?**",a:"ملف"},
          {q:"**ما معنى `Table` ?**",a:"طاولة"},
          {q:"**ما معنى `key` ?**",a:"مفتاح"},



          
      
      
      
      ];
          if(message.content == prefix+"trans"){
              if(UserBlocked.has(message.guild.id)) return message.channel.send("Wait Please ...")
              UserBlocked.add(message.guild.id)
              var ask = trans[Math.floor(Math.random() * trans.length)];
              let embed = new Discord.RichEmbed()
              .setTitle('=== ( Translation ) ===')
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
                   .setTitle(':white_check_mark: Corrrect Answer :)')
                   .setAuthor("============")
                   .setFooter(message.author.username)
                   .setDescription(`=================`)
                   .setColor("RANDOM")
                      message.channel.sendEmbed(embeds);                return;
                 } else {
       
                                        var embedx = new Discord.RichEmbed()
                    .setTitle(':negative_squared_cross_mark:  False Answer :(')
                    .setAuthor("============")
                    .setFooter(message.author.username)
                    .setDescription(`=================`)
                    .setColor("RANDOM")
                      message.channel.sendEmbed(embedx);
                 }
           });
        }
      });

client.on("message", async message => {
  var fkk =[
      {q:"**'القسطنطينية'**",a:"ا ل ق س ط ن ط ي ن ي ة"},
      {q:"**`قدرنامنجاكي`**",a:"ق د ر ن ا م ن ج ا ك ي"},
      {q:"**`تمنراست`**",a:"ت م ن ر ا س ت"},
      {q:"**`الاسكندرية`**",a:"ا ل ا س ك ن د ر ي ة"},
      {q:"**`دبلوماسي`**",a:"د ب ل و م ا س ي"},
      {q:"**`قميص نفيسه نشف`**",a:"ق م ي ص ن ف ي س ه ن ش ف"},
      {q:"**`حوش خميس خوش حوش`**",a:"ح و ش خ م ي س خ و ش ح و ش"},
      {q:"**`قعقاع فوق قعقاع`**",a:"ق ع ق ا ع ف و ق ق ع ق ا ع"},
      {q:"**`فراش فراس مفروش`**",a:"ف ر ا ش ف ر ا س م ف ر و ش"},
      {q:"**`صفحة سبعة صعبة`**",a:"ص ف ح ة س ب ع ة ص ع ب ة"},
      {q:"**`لوري بلا بوري`**",a:"ل و ر ي ب ل ا ب و ر ي"},
  
  
  
  ];
      if(message.content == prefix+"fkk"){
          if(UserBlocked.has(message.guild.id)) return message.channel.send("Wait.")
          UserBlocked.add(message.guild.id)
          var ask = fkk[Math.floor(Math.random() * fkk.length)];
          let embed = new Discord.RichEmbed()
          .setTitle('=== ( Break The Sentence')
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor("RANDOM")
          .setDescription(ask.q);
          message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
          const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
              UserBlocked.delete(message.guild.id)
          msgs.forEach(result => {
             if(result.author.id == client.user.id) return;
             if(result.content == "fkk") return
             if(result.content == ask.a){
               let embedsss = new Discord.RichEmbed()
               .setTitle(':white_check_mark: Corrrect Answer :)')
               .setAuthor("============")
               .setFooter(message.author.username)
               .setDescription(`=================`)
               .setColor("RANDOM")
                  message.channel.sendEmbed(embedsss);                return;
             } else {
   
                                    var embedx23 = new Discord.RichEmbed()
                                    .setTitle(':negative_squared_cross_mark:  False Answer :(')
                                    .setAuthor("============")
                                    .setFooter(message.author.username)
                                    .setDescription(`=================`)
                                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedx23);
             }
       });
    }
  });





    client.on('message' , message => {;
      if(message.author.bot) return;
    
        if(message.content.startsWith('$xo')) {
     let array_of_mentions = message.mentions.users.array();
      let symbols = [':o:', ':heavy_multiplication_x:'] 
      var grid_message;
    
      if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
        let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        let random2 = Math.abs(random1 - 1); 
        if (array_of_mentions.length == 1) {
          random1 = 0;
          random2 = 0;
        }
        let player1_id = array_of_mentions[random1].id;
        let player2_id = array_of_mentions[random2].id;
        var turn_id = player1_id;
        var symbol = symbols[0];
        let initial_message = `مباراة بين <@${player1_id}> و <@${player2_id}>!`;
        if (player1_id == player2_id) {
          initial_message += '\n_(من الخاسر, انت تلعب هذا الدور مع نفسك :joy:)_'
        }
        message.channel.send(`xo! ${initial_message}`)
        .then(console.log("Successful tictactoe introduction"))
        .catch(console.error);
        message.channel.send(':one::two::three:' + '\n' +
                             ':four::five::six:' + '\n' +
                             ':seven::eight::nine:')
        .then((new_message) => {
          grid_message = new_message;
        })
        .then(console.log("Successful xo game initialization"))
        .catch(console.error);
        message.channel.send('يتم تحميل... انتظر الريئاكشن :ok:')
        .then(async (new_message) => {
          await new_message.react('1⃣');
          await new_message.react('2⃣');
          await new_message.react('3⃣');
          await new_message.react('4⃣');
          await new_message.react('5⃣');
          await new_message.react('6⃣');
          await new_message.react('7⃣');
          await new_message.react('8⃣');
          await new_message.react('9⃣');
          await new_message.react('🆗');
          await new_message.edit(`انه دور <@${turn_id}> علامتك هي${symbol}`)
          .then((new_new_message) => {
            require('./SC.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
          })
          .then(console.log("Successful xo listener initialization"))
          .catch(console.error);
        })
        .then(console.log("Successful xo react initialization"))
        .catch(console.error);
      }
      else {
        message.reply(`_مهلا مهلا_ :anger: \`(استعمل هذا: ${prefix}xo @player1 @player2)\``)
        .then(console.log("Successful error reply"))
        .catch(console.error);
      }
    }
     });

      client.on('message', message => {
  
        if (message.content.startsWith('$games-list')){
             let meerc2y = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription("**check your DM / direct messages.**")
             
             
          message.channel.sendEmbed(meerc2y);
            }
        });

var figlet = require('figlet');
client.on('message', edward => {
    var commandedward = "asc";
    if (edward.content.startsWith(prefix + commandedward)) {
    if (!edward.channel.guild) return;
    var argsedward = edward.content.split(" ").slice(1).join(" ");
    if (!argsedward) return edward.channel.send(`**Hey There , Type SomeThing to ASCII** 🌦.`);
figlet(argsedward, function(err, dataed) {
    if (err) {
        edward.channel.send(`\`\`\`apache\nErr; ${err}\`\`\``);
        }
    var edwardhere = "";
    var edwardem = new Discord.RichEmbed()
    .setColor(edward.member.displayHexColor || "36393e")
    .setAuthor(`${commandedward} Service;`,edward.author.avatarURL || edward.author.defaultAvatarURL)
    .setDescription(`|| ------------------------------------------------------------------- ||\`\`\`fix\n${dataed} ${edwardhere}\`\`\``)
    .setThumbnail(edward.guild.iconURL || edward.author.displayAvatarURL)
    .setTimestamp()
    .setFooter(client.user.username,client.user.avatarURL || client.user.defaultAvatarURL);
if (argsedward.length <= 6){
    edward.channel.send(edwardem);
        }
if (argsedward.length >= 7){
    edward.channel.send(`\`\`\`fix\n${dataed}\`\`\``);
     }
 
})}});


client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '$sc') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })

//////////////////
client.login(process.env.SYSTEM);
