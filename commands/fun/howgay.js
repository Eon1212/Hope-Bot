const Discord = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
module.exports = {
    name: "howgay",
    category: "fun",
    description: "Shows the % of gay",
    run: async (client, message, args) => {
        let m = getMember(message, args.join(" "));
        if(m.user == client.user) return message.channel.send("NO U!") 
      if(m.user.bot) return message.channel.send("Bot's aren't gay bish")
        
        let k = Math.floor(Math.random() *100)
        
        if(m){
          
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Gay Detector!")
        .setAuthor(m.displayName, m.user.avatarURL)
        .setDescription(`${m.displayName} is ${k}% gay🏳️‍🌈`)
        .setFooter(message.guild.me.displayName, client.user.avatarURL);
        message.channel.send(embed);
          
        } else {
            const aEmbed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle("Gay Detector!")
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setDescription(`You are ${k}% gay🏳️‍🌈`)
            .setFooter(message.guild.me.displayName, client.user.avatarURL);
            message.channel.send(aEmbed);
        }

    }
}