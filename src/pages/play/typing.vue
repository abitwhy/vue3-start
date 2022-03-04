<template>
  <span class="line">{{ dynamicTextArray.join('') }}</span>
</template>

<script setup>
import { ref } from '@vue/reactivity'

const text = '俄罗斯对乌克兰发动了攻势',
  textArray = text.split('') // eslint-disable-line no-unused-vars

let dynamicTextArray = ref([])
</script>

<script>
export default {
  mounted() {
    const { textArray, dynamicTextArray } = this

    const loopArray = (origin, target) => {
      const { length } = origin,
        { length: targetLength } = target
      if (length === targetLength) {
        origin.splice(0)
      } else {
        origin.push(target[length])
      }
    }

    setInterval(loopArray.bind(null, dynamicTextArray, textArray), 200)
  },
}
</script>

<style lang="scss">
.line {
  &::after {
    display: inline-block;
    content: '';
    border-left: 1px solid #000;
    height: 1em;
    vertical-align: text-bottom;
    animation: blink 1s infinite;
  }
}

@keyframes blink {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  40% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
}
</style>
