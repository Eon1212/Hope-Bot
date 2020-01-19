const Discord = require("discord.js")
module.exports = {
    name: "quote",
    aliases: ["quotes"],
    category: "general",
    description: "Shows quotes",
    run: async (client, message, args) => {
        let replies = [
        `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\n\n **― Marilyn Monroe**`,
        `Be yourself; everyone else is already taken.\n\n **― Oscar Wilde**`,
        `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\n\n **― Albert Einstein**`,
        `So many books, so little time.\n\n **― Frank Zappa**`,
        `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\n\n **― Bernard M. Baruch**`,
        `A room without books is like a body without a soul.\n\n **― Marcus Tullius Cicero**`,
        `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.\n\n **― William W. Purkey**`,
        `You know you're in love when you can't fall asleep because reality is finally better than your dreams.\n\n **― Dr. Seuss**`,
        `You only live once, but if you do it right, once is enough.\n\n **― Mae West**`,
        `Be the change that you wish to see in the world.\n\n **― Mahatma Gandhi**`,
        `In three words I can sum up everything I've learned about life: it goes on.\n\n **― Robert Frost**`,
        `Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.\n\n **By - A. P. J. Abdul Kalam**`,
        `A friend is someone who knows all about you and still loves you.\n\n **― Elbert Hubbard**`,
        `Always forgive your enemies; nothing annoys them so much.\n\n **― Oscar Wilde**`,
        `To live is the rarest thing in the world. Most people exist, that is all.\n\n **― Oscar Wilde**`
        ]
        let result = Math.floor((Math.random() * replies.length));

        let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#FF9900")
        .addField("Quote", replies[result])
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();

        message.channel.send(embed);
    }
}