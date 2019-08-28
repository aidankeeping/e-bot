const {Client} = require('discord.js');
const bot = new Client();

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}`));

bot.on('message', message => {
    if(message.author.bot) return;
    let msg = message.content;
    let count = 0;
    let clist = msg.split("");
    clist.forEach(char => {
        if(char === 'e') count++;
    })
    if(count == msg.length){
        message.channel.send(msg);
    }
});

bot.login(process.env.TOKEN);