import { characterData } from '../../testData/emoji.data'

export const getRandomNumChar = (number: number) => {
  const characters = characterData
  const emojiOutput = new Set()

  while (emojiOutput.size < number) {
    const randomNum = Math.trunc(Math.random() * characters.length)

    const currentOutput = characters[randomNum]

    emojiOutput.add(currentOutput)
  }

  return [...emojiOutput]
}
