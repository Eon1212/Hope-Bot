const Discord = require("discord.js");
module.exports = {
    name: "mention",
    aliases: ["call"],
    category: "moderation",
    description: "mentions a role",
    run: async (client, message, args) => {
        message.delete()
        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send(":x: | You don't have the required permissions!")
        let role = message.guild.roles.find(r => r.name.toLowerCase() === args.join(" "))
        if(!role) return message.channel.send(":x: | Add a role!")
        
        message.channel.send(`${message.author.tag} mentioned ${role}`)
    }
}