const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "fun",
    description: "Sends an epic meme",
    run: async (client, message, args) => {

        const subReddits = ["dankmeme", "meme", "me_irl"];

        const hmm = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(hmm);
        const embed = new RichEmbed()
            .setColor("GREEN")
            .setImage(img)
            .setTitle(`From/r/${hmm}`)
            .setURL(`https://www.reddit.com/r/${hmm}/`);

        message.channel.send(embed);
    }
}