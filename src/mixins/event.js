/**
 * @description 与原生 addEventListener 功能完全一致，但更易用
 * 优点：
 * 自动移除监听
 * 支持直接使用匿名监听函数、箭头监听函数
 * @param 参数与 window.prototype.addEventListener 一致
 */
export default {
  data() {
    return {
      /**
       * [Vue data.property](https://cn.vuejs.org/v2/api/#data) 命名规则限制不得使用 _ 开头变量名
       * 参照[JSDoc3 名称路径规范](https://www.shouce.ren/api/view/a/13233)，使用这种更安全的变量名
       */
      ['~listeners']: new Map(),
    }
  },
  methods: {
    addEventListener() {
      window.addEventListener(...arguments) // window.addEventListener 比 document.addEventListener 可以监听更多的事件，如：storage
      const [event, listener, option] = arguments // option 可能是 options 或 useCapture，详见 https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener#syntax
      this['~listeners'].set(listener, { event, option })
    },
  },
  unmounted() {
    this['~listeners'].forEach(({ event, option }, listener) => {
      window.removeEventListener(event, listener, option)
    })
  },
}
