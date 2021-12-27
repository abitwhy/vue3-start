<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <!-- 组件使用 PascalCase 命名，参考：https://v3.vuejs.org/api/sfc-script-setup.html#:~:text=however%20PascalCase%20component%20tags%20are%20strongly%20recommended%20for%20consistency -->
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: { HelloWorld },
}
</script>

<style></style>
