/**
 * 遍历嵌套的数据结构
 *
 * @param {*} target 目标
 * @param {Function} callback 回调函数，接收参数： { item, key, index?, target }，其中 index 仅当 target 是类数组对象时存在
 * @param {Object} option? 配置
 */
export const traverse = (
  target,
  callback,
  /**
   * @namespace
   * @property {String} subkey? 子数组键名
   */
  option
) => {
  const defaultOption = {
      subkey: 'children',
    },
    { subkey } = { ...defaultOption, ...option }

  // 深度递归遍历（有优势吗？）
  for (let key in target) {
    const item = target[key]
    const sub = item[subkey]
    const quit = Boolean(
      // 手动退出（通过 callback 的返回值决定）
      callback({
        item,
        key,
        // index 是 key 的别名，符合类数组对象的语法习惯
        index: typeof key === 'number' ? key : undefined,
        target,
      }) ||
        // 否则执行递归
        traverse(sub, callback, option)
    )
    if (quit) return true
  }
}
