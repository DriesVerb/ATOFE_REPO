import { create } from "zustand";

export type EmojiState = {
  emojis: [string]
  setEmojis: (by: [string]) => void
}

export const useEmojiStore = create<EmojiState>((set) => ({
  emojis: [""],
  setEmojis: (by) => set(() => ({ emojis: by }))
}))

