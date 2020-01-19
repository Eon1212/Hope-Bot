const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
module.exports = {
  name: "avatar",
  aliases: ["pfp"],
  description: "Shows avatar of a user",
  category: "general",
  run: async (client, message, args ,) => {
    const pers = getMember(message, args[0]);
    const embed = new RichEmbed()
    // .setAuthor(pers.tag, pers.member.displayAvatarURL)
    .setTitle(`${pers.displayName}'s Avatar`)
    .setColor(pers.displayHexColor)
    .setImage(pers.user.displayAvatarURL)
    .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(embed)
  }
}