const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    aliases: ["whois", "user", "info", "who", "ui"],
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('**Member information:**', stripIndents`**Display name:**\n ${member.displayName}
            **Joined at:**\n ${joined}
            **Roles:**\n ${roles}`, true)

            .addField('**User information:**', stripIndents`**ID:**\n ${member.user.id}
            **Username**:\n ${member.user.username}
            **Tag**:\n ${member.user.tag}
            **Created at**:\n ${created}`, true)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**Name:**\n ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}