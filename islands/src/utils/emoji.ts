import emojisRawData from "../data/emojisRaw.json"

export type EmojiRaw = {
  id: number
  character: string
  info: string
}

export const getRanEmojiByAmount = (amount: number): EmojiRaw[] => {
  const emojis = emojisRawData
  const emojiOutput = new Set()

  while (emojiOutput.size < amount) {
    const randomNum = Math.trunc(Math.random() * emojis.length)

    const currentOutput = emojis[randomNum]

    emojiOutput.add(currentOutput)
  }

  return [...emojiOutput] as EmojiRaw[]
}
