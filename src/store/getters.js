// 根级别 getters

// 疑问：既然可以通过 createNamespacedHelpers 很方便地访问带命名空间的嵌套模块的 getters，那么还需要在根 getters 中再导出一遍吗
export const friendsCircleLevel = (state, getters) => {
  return getters['module/friendsCircleLevel']
}
