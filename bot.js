const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600284942299299844")
setInterval(function() {
channel.send(`Talal Talal Talal Talal Talal`);
}, 30)
})

client.login(process.env.BOT_TOKEN);