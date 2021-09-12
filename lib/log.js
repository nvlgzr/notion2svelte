// 
export default function (toLog, label = '', config = { emoji: '🔖', delimiter: '⇒' }) {
  console.log(config.emoji, label, config.delimiter, JSON.stringify(toLog, null, 2), '\n')
}