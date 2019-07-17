/////////////////////////////////////////////////////////////////////////
const fs = require("fs"); 
const adminprefix = "^";
const UserBlocked = new Set();
const jimp = require('jimp');   
const Discord = require('discord.js');
const prefix = "^"
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
             let embedxx = new Discord.RichEmbed()
    
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
      message.author.sendEmbed(embedxx);
        }
    });
    //////////////////
    client.on('message' , message => {
  
        if (message.content === '$help') {
                 let embed1234 = new Discord.RichEmbed()
        
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
          message.author.sendEmbed(embed1234);
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
                if (message.content.startsWith('$Stockholm-info')){
                    const xHu = "16";
                     let xHu2 = new Discord.RichEmbed()
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
                  message.channel.sendEmbed(xHu2);
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
