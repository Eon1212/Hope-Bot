const Discord = require("discord.js");
module.exports = {
    name: "removerole",
    aliases: ["rrole", "clearrole", "rr"],
    category: "moderation",
    description: "Removes role from a member",
    run: async (client, message, args) => {
        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You don't have the require permission!")

        let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
        if(!rMember) return message.channel.send("You have to mention someone or add the ID of that user")
        let role = message.guild.roles.find(r => r.name.toLowerCase() === args.slice(1).join(" "))
        if(!role) return message.channel.send("Add a role!")

        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have the require permission!")

        if(!rMember.roles.has(role.id)) {
            return message.channel.send(`${rMember.displayName} doesn't have the role!`)
        } else {
            await rMember.removeRole(role.id).catch(e => console.log(e.message))
            message.channel.send(`${role.name} has been removed from ${rMember.displayName}.`)
        }

    }
}