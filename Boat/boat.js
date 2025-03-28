const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config({ path: __dirname + '/.env' });

const TOKEN = process.env.BOT_TOKEN;
console.log("BOT_TOKEN:", TOKEN || "❌ Not Found"); // Debugging

const bot = new TelegramBot(TOKEN, { polling: true });

// Log incoming messages
bot.on('message', (msg) => {
    console.log("Received Message:", msg);
    let txt = msg.text;
    bot.sendMessage(msg.chat.id, "You said: " + txt);
});

// Log polling errors
bot.on('polling_error', (error) => {
    console.error("Polling Error:", error);
});
