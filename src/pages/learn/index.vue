<template>
  <div class="learn">
    <h1>vue3 语法学习</h1>
    <small>尽快掌握 vue3 + vite 项目的构建</small>
    <router-view :name="name"></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss">
// [vite CSS 预处理器](https://cn.vitejs.dev/guide/features.html#css-pre-processors)
.learn {
  > h1 {
    // postcss autoprefixer 测试（autoprefixer 是自动为 css 属性添加浏览器前缀的插件）
    user-select: none; // 禁止复制
  }
}
</style>
