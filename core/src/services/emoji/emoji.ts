import { characterData } from '../../testData/emoji.data'

export const getRandomNumChar = (amount: number): string[] => {
  const characters = characterData
  const emojiOutput = new Set()

  while (emojiOutput.size < amount) {
    const randomNum = Math.trunc(Math.random() * characters.length)

    const currentOutput = characters[randomNum]

    emojiOutput.add(currentOutput)
  }

  return [...emojiOutput] as string[]
}
