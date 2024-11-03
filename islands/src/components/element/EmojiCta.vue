<template>
  <div>
    <ul>
      <li v-for="item in emojis">
        {{ item.character }}
      </li>
    </ul>
    <button @click="setNew">set New</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getRanEmojiByAmount, type EmojiRaw } from "../../utils/emoji"

const emojis = ref<EmojiRaw[] | null>([])

emojis.value = getRanEmojiByAmount(5)

const setNew = () => {
  console.log("reee")
}
</script>
