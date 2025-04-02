# Discord Bot

This project is a simple Discord bot built using Node.js and the discord.js library. It includes basic command handling and event management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Events](#events)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/discord-bot.git
   ```

2. Navigate to the project directory:
   ```
   cd discord-bot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `config/config.json` file and add your bot token:
   ```json
   {
     "token": "YOUR_BOT_TOKEN"
   }
   ```

## Usage

To start the bot, run the following command:
```
node src/index.js
```

## Commands

- `!ping`: Responds with "Pong!" to indicate that the bot is alive.

## Events

- `ready`: Logs a message to the console when the bot is online.

## License

This project is licensed under the MIT License.