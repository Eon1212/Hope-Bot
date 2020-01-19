let Discord = require('discord.js');
let asciify = require('figlet');


module.exports = {
  name: "ascii",
  description: "Asciify Your text",
  category: 'fun',
  usage: "<text>",
  run: async (client, message, args) => {
    
    if(!args[0]) return message.channel.send(":x: Please add a text!")
  asciify(args.join(' ') , function(err, data) {
    
    
    message.channel.send(`\`\`\`${data}\`\`\``)
    
  })

  }
}