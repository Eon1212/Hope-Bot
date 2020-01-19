const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const Discord = require("discord.js");

const cathyjs = require("cathyjs");

const client = new Client({
    disableEveryone: true
})


const fs = require("fs");
const prefix = ">";

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);

    client.user.setPresence({
        status: "dnd",
        game: {
            name: "With Members",
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    }); 
})

client.on("message", async message => {
  

    if (message.author.bot) return;
    if (!message.guild) return;
  
    let channel = client.channels.get("656024823515971587")
    
    if (message.channel.id == channel.id) {
 
        let text = message.content
        channel.startTyping();
    
        var reply = await cathyjs.startChatting(`${text}`);
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(reply)
      .setColor(message.member.displayHexColor)
      .setTimestamp();
      message.channel.send(embed)
    
    
        // channel.send(`${message.author}, ${reply}`);
        message.channel.stopTyping();
    } 

    if (!message.content.startsWith(prefix)) return;
    

    
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    
    let command = client.commands.get(cmd);
    
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    
    if (command) 
        command.run(client, message, args);

        
});


client.login(process.env.TOKEN);