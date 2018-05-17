const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', arg => {
    console.log('Бот запущен!');
});

client.on('ready', arg => {
    console.log('Статус игры работает');
    client.user.setPresence({ game: { name: 'Любит Юлю ❤', type: 0 } });
});

var prefix = '-'

client.login("NDQ2NjYzNDEzNDI3MzM5MjY1.Dd8TRw.n2Ewj8Qf5QIODhmQfMoLKanQFiA");

client.on('message', (message) => {
    if(message.author === client.user) return;
    if(message.content.startsWith (prefix + 'hi')) {
        message.reply ('Привет');
    }
});

client.on('message', (message) => {
    if(message.author === client.user) return;
    if(message.content.startsWith (prefix + 'ping')) {
        message.channel.sendMessage ('Pong!');
    }
});