<template>
  <b :[dynamicAttribute]="'动态参数'" v-on:[dynamicEvent]="onClick"
    >动态参数测试</b
  >
</template>

<script>
export default {
  computed: {
    dynamicAttribute() {
      console.log(navigator.userAgentData)
      const attribute = navigator.userAgentData.mobile ? null : 'title' // 动态参数的空值是 null
      return attribute
    },
    dynamicEvent() {
      const event = navigator.userAgentData.mobile ? 'click' : 'dbclick'
      return event
    },
  },
  methods: {
    onClick(e) {
      console.log('e', e)
      console.log('event type', e.type)
    },
  },
}
</script>
