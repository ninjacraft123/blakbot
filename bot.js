const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هنا') {
    msg.reply('لوفي الملك');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`shelp`,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي', `Welcome to the server ${member}`)
        .addField('User ID :', `"[" + ${member.id} + "]"` )
                .addField(':arrow_down:',`** انت العضو رقم ${member.guild.memberCount}**`)

                  .addField("Name:",`**<@${member.id}>**`, true)

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

     .setFooter('Server To Legends')
        .setTimestamp()

      channel.sendEmbed(embed);
});

client.on('message', message => { // هاذا للبرودكسات
        var prefix = 's'; // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'bc') { // الكوماند !bc
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#000000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links 😠 !**`)
    }
}
});

client.on("message", message => {
    var prefix = "s";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "©KBOOSHDev"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

client.on("message", message => {
var prefix = "s";
        if(message.content.startsWith(prefix + "say")) {
    if(message.author.id !== "401441334864510986") return message.reply("هذا الامر لصحاب البوت فقط");
        let args = message.content.split(" ").slice(1);
message.channel.send(args)
        }
});

client.on("message", (message) => {
if (message.content.startsWith("sct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});

client.on("message", (message) => {
if (message.content.startsWith("scv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('sping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
					
client.on('message', message => {
    if (message.content === "sserver") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });

  client.on('message', message => {
    if (message.content === "srooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='smembers')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });
  
    client.on('message', message => {
     if (message.content === "sid") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
	var prefix = "s";
    if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'report')) return message.channel.send('**نرجو عمل روم باسم report**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:منشن:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:وش سوى؟:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`بلاغ من قبل: ${message.author.tag}`)
    .addField('**المجرم:**', `${name1}`, true)
    .addField('**بروم:**', `${message.channel.name}`, true)
    .addField('**البلاغ:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'report').sendEmbed(abod)
    message.reply('**:sunglasses:بنأخذ حقك:sunglasses:**').then(msg => msg.delete(3000));
    }
});

client.on("message", message => {
 if (message.content === "shelp") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه النكليزية
                                                                       
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『اوامر عامة』💎
                        
💎sserver『معلومات عن السيرفر』

💎sping『لمعرفه سرعه البوت』

💎ssay『لي يكرر الكلام الذي تقوله』

💎smembers『معلومات عن الاعضاء』 

💎srooms『معلومات عن الرومات』 

💎sreport『لل ابلاع عن شخص』

💎sid『معلومات عنك』

💎savatar『لرأيت صورتك مكبرة』

💎scredits『رصيد』

💎sdaily『اخذ رصيد』
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

👑『اوامر ادارية』👑

👑sclear『لمسح الشات برقم』

👑sct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑scv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

💎sban『حضر نهائي』

💎skick『طرد يقضر يرجع  السيرفر』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

`)

message.author.sendEmbed(embed)

}
}); 

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('***ليلة ورة ليلة حشتاج الك***')
.addField('**الاسم**',`[ ${member} ]`)
.addField('**عدد الاعضاء**',`[ ${member.guild.memberCount} ]`,true)
.setColor('Random')
   
   var channel =member.guild.channels.find('name', 'welcome')
   if (!channel) return;
         channel.send({embed : embed});
 
});

client.on('ready',async () => {
  client.channels.find(ch => ch.id === "591535541875376170" && ch.type === 'voice').join();
});
bot.on('messageCreate', async(message) => {
  if(message.author.bot || !message.channel.guild) return undefined;
  let args = message.content.toLowerCase().split(' ');
  let cmd = args[0].slice(s.length);
  if(cmd == `avatar`){
    let avt =  message.mentions[0] ? message.member.guild.members.get(message.mentions[0].id) : message.member.guild.members.find(m => m.user.id == args[1] || m.user.username.toLowerCase().includes(args[1]) || m.user.discriminator == args[1]) || message.member;
    let avtName;
    if(avt == message.member) {avtName = `Your`} else {avtName = `${avt.user.username}'s`};
    if(args[1] == 'server'){
      if(message.content.toLowerCase().endsWith('-url')) return bot.createMessage(message.channel.id, message.member.guild.iconURL || 'No Icon.');
      await bot.createMessage(message.channel.id, {embed: {image: { url: message.member.guild.iconURL || 'https://bitsofco.de/content/images/2018/12/broken-1.png' }, footer: { text: bot.user.username, icon_url: bot.user.avatarURL }, author: { name: 'Server Icon', icon_url: message.author.avatarURL }}});
    } else {
      if(message.content.toLowerCase().endsWith('-url')) return bot.createMessage(message.channel.id, avt.user.avatarURL || 'No Avatar.');
      await bot.createMessage(message.channel.id, {embed: {image: { url: avt.user.avatarURL || 'https://bitsofco.de/content/images/2018/12/broken-1.png'}, footer: { text: bot.user.username, icon_url: bot.user.avatarURL }, author: { name: `${avtName} Avatar`, icon_url: message.author.avatarURL }}});
  }
}
});

var prefix = 's'; // your prefix
client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});

var prefix = 's'; // your prefix
client.on('message', message => {	
  if(message.content.split(' ')[0] == `${prefix}kick`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | You dont have **KICK_MEMBERS** Permission!');
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | I dont have **KICK_MEMBERS** Permission!');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send("**• | Usage:** !kick \`\`@Name\`\` reason");
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send(':no_entry: | Why you want kick **Your Self** ?');
      if(user.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | Nice try dude \:D');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | You cant give **${user.user.username}** Kick because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I cant give **${user.user.username}** Kick because his role highest than my role!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`:no_entry: | I cant give **${user.user.username}** Kick.`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`:no_entry: | You cant give **${user.user.username}** Kick because he have Administration permissions!`);
      message.guild.member(user).kick(reason, user);
      message.channel.send(`:white_check_mark: | Successfully \`\`KICKED\`\` ${user.user.username} from the server! :airplane: \`\`${reason}\`\``);
    }
});
const sql = require('sqlite');
const path = require('path');
sql.open(path.join(__dirname, 'credits.sql')) // read sql file
.then(() => { // then ?
    console.log('Opened') // if the sql opened
    sql.run(`CREATE TABLE IF NOT EXISTS creditSysteme (id VARCHAR(30), credits BIGINT, timeDaily BIGINT)`) // create new table if the table does'nt exosts
})
.catch(err => console.error(err)) // if the sql file does'nt exists
 
const ms = require('parse-ms'); // package time ?
client.on("message", async msg => { // event message
    if(!msg.channel.guild) return; // channel guild
    let men = msg.mentions.users.first() || msg.author; // the mention or the author
    let prize =  msg.content.split(" ").slice(2).join(" ") // prize
 
    if(msg.content.startsWith(prefix+"credits")) { // if the message content credits do
        if(!men || !men === undefined) return msg.channel.send("** :interrobang: | "+men.username+", I can't find "+men.username+"!**"); // undefind user
        if(!prize) {
        sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`).then(res => { // select user from table
            if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if the user does'nt exisit in table
            if(res) { // if user exsist
                    msg.channel.send("**"+men.username+" :credit_card: balance is ``"+res.credits+"$``.**") // reply
            }
        })
        }else{ // else ?
            if(isNaN(prize)) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // is nan :)
            if(parseFloat(prize) === NaN) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // if nan :))
            if(men === msg.author) return; // if the men = author
            let authorRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
            let userRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`) // select from sql
            if(!authorRes) sql.run(`INSERT INTO creditSysteme VALUES ('${msg.author.id}', 0, 0)`) // if !user create new col
            if(!userRes) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col
            let authorCredits = authorRes.credits; // credits before transfer
            let userCredits = userRes.credits; // credits before transfer
            if(parseFloat(prize) > authorCredits) return msg.channel.send("** :thinking: | "+msg.author.username+", Your balance is not enough for that!**"); // if the balance hight then prize
            sql.run(`UPDATE creditSysteme SET credits = ${authorCredits - parseInt(prize)} WHERE id = '${msg.author.id}'`); // uptade credits for the author
            sql.run(`UPDATE creditSysteme SET credits = ${userCredits + parseInt(prize)} WHERE id = '${men.id}'`); // update credits for the mentions user
            msg.channel.send("**:moneybag: | "+msg.author.username+", has transferred ``$"+prize+"`` to "+men.toString()+"**") // the message :)
        }
    } else if(msg.content.startsWith(prefix+"daily")) {  // if the message content daily do
        let daily = 86400000; // 24h
        let amount = Math.floor((Math.random() * 500) + 1) // Money
    let res = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
        if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col
    let time = res.timeDaily; // select last daily
    let credits = res.credits; // credits before daily
    if(time != null && daily - (Date.now() - time) > 0) { // if already climed the daily in same day
 
            let fr8 = ms(daily - (Date.now() - time)); // the remining time
            msg.channel.send("**:stopwatch: | "+msg.author.username+", your daily :yen: credits refreshes in "+fr8.hours+" hours and "+fr8.seconds+" seconds. **") //reply
 
        }else{ // if does'nt clim her daily in 24h
            msg.channel.send("**:atm:  |  "+msg.author.username+", you received your :yen: "+amount+" daily credits!**"); // reply
            sql.run(`UPDATE creditSysteme SET credits = ${credits + amount}, timeDaily = ${Date.now()} WHERE id = '${msg.author.id}'`); // add amount to the credits before daily
        }
    }
})

client.login(process.env.BOT_TOKEN);
