/**
 * @description 从组件源中读取组件，并按照 name 属性命名和导出（注意：name 属性是必要的）
 * @param {array|object} components 组件源
 * @returns {object} Vue 组件选项
 * @todo 接收任意可遍历类型的组件集合（通过 Array.from 作适配）；数组类型组件源去重处理（重复元素 and/or 同名组件），目前默认的规则是覆盖，与 Set 的屏蔽规则不一致
 */
export const componentsIn = (components) => {
  let namedComponents = {}

  if (components instanceof Array) {
    namedComponents = components.reduce(
      (finalComponents, component) => ({
        ...finalComponents,
        [component.name]: component,
      }),
      {}
    )
  }
  if (components instanceof Object) {
    for (const key in components) {
      if (Object.hasOwnProperty.call(components, key)) {
        const component = components[key],
          { name } = component

        namedComponents[name] = component
      }
    }
  }

  return namedComponents
}
