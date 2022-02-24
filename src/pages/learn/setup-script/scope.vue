<script setup>
// protect variable
let dependOnPv

// private variable
void (() => {
  const pv = 'setup 私有变量'
  dependOnPv = `依赖于 ${pv}`
})()

// public variable | https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineprops-%E5%92%8C-defineemits
defineExpose({
  publicVariable: '公开变量', // 通过 ref 可访问到公开变量，因此无法在本组件内演示
})
</script>

<template>
  <p>{{ dependOnPv }}</p>
  <p>{{ pv || '不' }}可以在模板中访问私有变量</p>
</template>

<script>
export default {}
</script>
