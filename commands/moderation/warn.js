const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "warn",
    aliases: [],
    category: "moderation",
    description: "Warns a member",
    usage: "<name | mention | id",
    run: async (client, message, args) => {
        
        if (!args[0]) {
            return message.reply("Please provide a person to warn.")
                .then(m => m.delete(5000));
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please provide a reason to warn.")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ You do not have permissions to warn members. Please contact a staff member")
                .then(m => m.delete(5000));
        }

        // No bot permissions
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("❌ I do not have permissions to warn members. Please contact a staff member")
                .then(m => m.delete(5000));
        }

        const toWarn = message.mentions.members.first() || message.guild.members.get(args[0]);
      let warnToAdd = 1;
      
      let warns = await db.fetch(`warn_${toWarn.id} reason_${args.slice(1).join(" ")}`)
      
      db.add(`warns_${message.guild.id}_${toWarn.id}`, warnToAdd);
      

        // No member found
        if (!toWarn) {
            return message.reply("Couldn't find that member, try again")
                .then(m => m.delete(5000));
        }

        // Can't warn urself
        if (toWarn.id === message.author.id) {
            return message.reply("You can't warn yourself...")
                .then(m => m.delete(5000));
        }
      
      const embed = new Discord.RichEmbed()
      .setAuthor(`${message.guild.name} Mod logs`, message.guild.iconURL)
      .setTitle("⚠️Member Warned")
      .setColor("#FF8333")
      .addField("Warned By", message.author.tag)
      .addField("Warned Member", `${toWarn.displayName} ID:${toWarn.id}`)
      .addField("Reason", args.slice(1).join(" "))
      .addField("Warns", warns)
      .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
      .setTimestamp();
      
      let channel = message.guild.channels.find(c => c.name === "📦-mod-logs")
      if(!channel){
        message.guild.createChannel("📦-mod-logs")
        message.channel.send("Created channel for logs, please check the settings!")
      }
      channel.send(embed)
        
    }
}