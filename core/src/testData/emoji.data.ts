import { EmojiData } from '../types/emoji/emoji.type'
import data from './emojis.json'
import testEmojis from './emojiData.json'
import characters from './character.json'
import emojiRaw from './emojisRaw.json'

type emojiReturn = {
  character: string,
  info: string
}

export const emojisRawData = emojiRaw

export const emojiData: EmojiData = data
export const testData: emojiReturn[] = testEmojis

export const formatSlug = () => {
  const unsluggedData = testData

  unsluggedData.forEach((val: emojiReturn, index: number) => {
    const splitvVal = val.info.split("-").slice(2)

    const capitalizeFirstLetter = (list: string[]) => {
      return list.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    }

    const formatedSlug = capitalizeFirstLetter(splitvVal).join(" ")
    unsluggedData[index].info = formatedSlug
  })

  return unsluggedData
}

export const characterData: string[] = characters

export const extractCharacters = () => {
  let characterArray: emojiReturn[] = []

  emojiData.forEach((emoji) => {
    const variantsArray: emojiReturn[] = []
    if ('variants' in emoji) {
      variantsArray.push({
        character: emoji.character,
        info: emoji.slug
      })

      emoji.variants?.forEach((emoji) => {
        variantsArray.push({
          character: emoji.character,
          info: emoji.slug
        })
      })
    } else {
      characterArray.push({
        character: emoji.character,
        info: emoji.slug
      })
    }
    characterArray = [...characterArray, ...variantsArray]
  })

  return characterArray
}
