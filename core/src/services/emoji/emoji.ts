import { emojisRawData } from '../../testData/emoji.data'

export const getRandomNumChar = (amount: number): string[] => {
  const emojis = emojisRawData
  const emojiOutput = new Set()

  while (emojiOutput.size < amount) {
    const randomNum = Math.trunc(Math.random() * emojis.length)

    const currentOutput = emojis[randomNum]

    emojiOutput.add(currentOutput)
  }

  return [...emojiOutput] as string[]
}
