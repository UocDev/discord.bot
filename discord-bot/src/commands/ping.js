module.exports = {
    name: 'ping',
    description: 'Ping! Returns a response indicating the bot is alive.',
    execute(message) {
        message.channel.send('Pong! 🏓');
    },
};