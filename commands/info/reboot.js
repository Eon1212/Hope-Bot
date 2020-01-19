module.exports = {
name: 'reboot',
description: 'Reboots the bot. (Bot Owner only!)',
category: 'info',
run: async (client, message, args) => {
  
   if(message.author.id !== "555703466106814506") return message.channel.send(":x: | Only the bot owner can use it!")
  
  client.destroy()
  client.login(process.env.TOKEN) 
  message.channel.send("Bot rebooted.")
}
}