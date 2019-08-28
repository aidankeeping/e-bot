require('dotenv').config()
const {Client} = require('discord.js');
const bot = new Client();

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}`));

bot.on('message', message => {
    let c = 0;
    if(message.author.bot) return;
    message.content.split("").forEach(char => {
        if(char === 'e') c++;
    });
    if(c == message.content.length) message.channel.send(message.content);
});

bot.login('NjE2MzQ4MzkzMzc5MzMyMDk2.XWbXCg.RhubvdPXFphEs2aLsEEDZjgp2Qc');