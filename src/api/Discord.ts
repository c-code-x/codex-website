const Discord = require("discord.js");
const client = new Discord.Client();
const express=require("express")
const app=express()
client.login("MTA3NDM3NTMzODc4MTU5MzcwMA.GxRjTW.l6j7prprz4W0oKfXYwrwTMmkfMydveOC68Ullw");

client.on("ready", () => {
    console.log(DiscordAPI())});
export default function DiscordAPI(){
  const guild = client.guilds.cache.first();
  const memberCount = guild.memberCount;
  return(memberCount);
  };
