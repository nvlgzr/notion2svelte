// 
export default function (toLog, { label = 'ª', emoji = '🔖', delimiter = '⇒' }) {
  console.log(emoji, label, delimiter, JSON.stringify(toLog, null, 2), '\n')
}