<template>
  <p :[dynamic.attribute]="动态参数" v-on:[dynamic.event]="onEvent">
    动态参数测试
  </p>
</template>

<script>
export default {
  computed: {
    dynamic() {
      // const { mobile } = navigator.userAgentData // 最新的 userAgentData 标准在 chrome 调试工具里还无法正常使用
      const mobile = navigator.userAgent.includes('Mobile') // 旧版方式
      const attribute = mobile ? null : 'title' // 动态参数的空值是 null
      const event = mobile ? 'touchstart' : 'mouseenter'

      return { attribute, event }
    },
  },
  methods: {
    onEvent(e) {
      console.log('event type', e.type)
    },
  },
}
</script>
