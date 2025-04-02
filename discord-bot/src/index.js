// This file is the entry point of the Discord bot. It initializes the Discord client, sets up event listeners, and logs the bot in using the token from the configuration file.

const { Client, GatewayIntentBits } = require('discord.js');
const { ping } = require('./commands/ping');
const ready = require('./events/ready');
const config = require('../config/config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', ready);

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        ping(message);
    }
});

client.login(config.token);