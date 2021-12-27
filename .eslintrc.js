module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  globals: {
    defineProps: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /**
     * @description 多词组件名
     * 规则：{@link https://eslint.vuejs.org/rules/multi-word-component-names.html}
     * 个人觉得上述规则制定理由并不充分，理由如下：
     * 0. 如果 Vue.js 在编译组件时，不进行单词组件名的大小写转化，即：<Component /> != <component />，那么可能引发的冲突将迎刃而解。
     * 1. 普通组件名与内置组件名或原生标签名的冲突：普通组件名遵守大写首字母即可避免
     * 2. 路由组件名可以保持小写也不会引发上述冲突，因为路由组件不会出现在 template 中
     */

    // vue
    'vue/multi-word-component-names': 0,

    // prettier
    'prettier/prettier': 'error',
  },
}
