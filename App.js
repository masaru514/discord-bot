const Discord = require('discord.js')
// require('dotenv').config() // functions内では不要なためコメントアウト
const client = new Discord.Client()
const token = process.env.DISCORD_BOT_TOKEN
client.login(token)

client.on('message', async (message) => {
  try {
    let member = message.member
    const foodArr = [
      '🍞',
      '🥐',
      '🥖',
      '🥯',
      '🧀',
      '🍖',
      '🍗',
      '🥩',
      '🍔',
      '🌭',
      '🥪',
      '🍲',
      '🍙',
      '🍚',
      '🍛',
      '🍜',
      '🍝',
      '🍣',
      '☕',
      '🥂',
      '🍽️',
      '🍴',
    ]
    const isBreak = foodArr.some((item) => message.content === item)
    if (isBreak) {
      if (member.nickname) {
        member = await member.setNickname(`${member.nickname}🍖`)
      } else {
        member = await member.setNickname(`${member.user.username}🍖`)
      }

      // 多分邪魔なので今はコメントアウト
      // message.channel.send("休憩確認しました！いってらっしゃい〜")
    }
    if (message.content === '🦴') {
      const memberNameRemoveEmoji = member.nickname.replace(/🍖/g, '')
      member = await member.setNickname(`${memberNameRemoveEmoji}`)
      // 多分邪魔なので今はコメントアウト
      // message.channel.send("休憩終了を確認しました！おかえりなさい〜")
    }
  } catch (e) {
    console.error(e) // It's always useful to log your errors.
  }
})

exports.restChecker = (req, res) => {
  res.send('ready')
  client.on('ready', () => {
    client.user.setUsername('🍖休憩ちゃん🍖(Cloud Functionsに転生しました！)')
    console.log('ready...')
  })
  client.login(token)
}
