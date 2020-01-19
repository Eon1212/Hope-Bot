const inspect = require("util")
const Discord = require("discord.js")
module.exports = {
name: 'eval',
aliases: ["ev", "e"],
description: 'Evaluates the code you input',
category: 'info',
usage: "<code>",
run: async (client, message, args) => {
  const emoji = message.guild.emojis.find(e => e.name === "success")
  if(message.author.id !== "555703466106814506" && message.author.id !== "604987956205322260") return message.channel.send(":x: | Only the bot owner can use it!")
  let codee = args.join(" ")
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  try {
    if(args.join(" ").toLowerCase().includes("token")){
      return message.channel.send(":x: | Never ever try to know this!")
    }
      let code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTitle(`Success ${emoji}`)
    // .addField("**INPUT**","```xl\n" + codee + "```")
    .setDescription("```xl\n" + clean(evaled) + "```")
    .setFooter(args.join(" "))
    .setTimestamp()
    .setColor("GREEN")
    message.channel.send(embed)
 
      
    } catch (err) {
      console.log(err)
      const em = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setTitle("Error!")
      
      .setDescription("📤**OUTPUT**📤","```xl\n" + err + "```")
      // .setFooter(args.join(" "))
      .setTimestamp()
      .setColor("RED")
      .setFooter(args.join(" "))
      message.channel.send(em)
    }
  
}
}