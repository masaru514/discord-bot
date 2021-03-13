//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const token = process.env.DISCORD_BOT_TOKEN

client.on('ready', () => {
    client.user.setUsername("🍖 休憩ちゃん 🍖")
    console.log('ready...');
});

client.on('message', async message =>{
  try{
    let member = message.member
    const foodArr = ['🍞', '🥐', '🥖', '🥯', '🧀', '🍖', '🍗', '🥩', '🍔', '🌭', '🥪', '🍲', '🍙', '🍚', '🍛', '🍜', '🍝', '🍣', '☕', '🥂', '🍽️' , '🍴']
    const isBreak = foodArr.some(item => message.content === item)
    if (isBreak) {
      if(member.nickname) {
        member = await member.setNickname(`${member.nickname}🍖`)
      } else {
        member = await member.setNickname(`${member.user.username}🍖`)
      }

      // 多分邪魔なので今はコメントアウト
      // message.channel.send("休憩確認しました！いってらっしゃい〜")
    } 
    if(message.content === '🦴') {
      const memberNameRemoveEmoji = member.nickname.replace(/🍖/g, "")
      member = await member.setNickname(`${memberNameRemoveEmoji}`)
      // 多分邪魔なので今はコメントアウト
      // message.channel.send("休憩終了を確認しました！おかえりなさい〜")
    }
  } catch (e) {
    console.error(e); // It's always useful to log your errors.

    // 多分邪魔なので今はコメントアウト
    // return message.channel.send("!WARNING 管理者権限を持っていると名前を変更出来ません！");
  }
});
client.login(token);