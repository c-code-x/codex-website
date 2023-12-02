const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const app = express();

client.login(process.env.DISCORD_API_KEY);

client.on("ready", () => {
    console.log(DiscordAPI());
});
export default function DiscordAPI() {
    const guild = client.guilds.cache.first();
    const memberCount = guild.memberCount;
    return memberCount;
}
