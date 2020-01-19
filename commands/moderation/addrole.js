const Discord = require("discord.js");
module.exports = {
    name: "addrole",
    aliases: ["arole", "giverole", "ar"],
    category: "moderation",
    description: "Gives role to a member",
    usage: "<mention | id>",
    run: async (client, message, args) => {
      if(message.deletable) message.delete();
      
        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You don't have the required permissions!")

        let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
        if(!rMember) return message.channel.send("Mention someone or add the ID of that user")
        let role = message.guild.roles.find(r => r.name.toLowerCase() === args.slice(1).join(" "))
        if(!role) return message.channel.send("Add a role!")

        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have the required permission!").then(msg => msg.delete(5000));

        if(rMember.roles.has(role.id)) {
            return message.channel.send(`${rMember.displayName} already has the role!`)
        } else {
            await rMember.addRole(role.id).catch(e => console.log(e.message))
            message.channel.send(`${role.name} role has been added to ${rMember.displayName}.`)
        }

        
    }
}