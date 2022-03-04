export default {
  computed: {
    isDev: () => process.env.NODE_ENV.includes('dev'), // 由于没有用到组件实例，可以写成箭头函数
  },
}
