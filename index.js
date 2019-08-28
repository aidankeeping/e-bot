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

bot.login('NjE2MzQ4MzkzMzc5MzMyMDk2.XWbRNA.o8-J_x67qF_9poJDio8NJed5Hvc');