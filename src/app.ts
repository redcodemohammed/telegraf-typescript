// import installed packages.
import {Telegraf} from "telegraf";

// bot (auto commands)

// admin (group admin)

// everyone (everyone who has access to the bot)

// owner (set OWNER_ID in env variable)

// middlewares (executed before the actuall command)

// bot settings
const {BOT_TOKEN} = process.env; ("set BOT_TOKEN in env variable");

// create a bot object
if (!BOT_TOKEN) {
    console.log("BOT_TOKEN is not set.");
    process.exit();
};
const bot = new Telegraf(BOT_TOKEN);


// bot
bot.start((ctx) => ctx.reply("it's working :)")); // just to make sure it's working.
// admin

// everyone

// owner

// start
bot.launch();


