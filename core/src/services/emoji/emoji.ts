import { emojisRawData } from '../../testData/emoji.data'
import { EmojiRaw } from '../../types/emoji/emoji.type'

export const getRandomNumChar = (amount: number): EmojiRaw[] => {
  const emojis = emojisRawData
  const emojiOutput = new Set()

  while (emojiOutput.size < amount) {
    const randomNum = Math.trunc(Math.random() * emojis.length)

    const currentOutput = emojis[randomNum]

    emojiOutput.add(currentOutput)
  }

  return [...emojiOutput] as EmojiRaw[]
}
