/**
 * @see {@link d2-admin} https://github.com/d2-projects/d2-admin/blob/master/src/libs/util.log.js}
 */

/**
 * @description 不会在生产环境打印的控制台日志
 * @param  与 console.log 相同
 */
export default function log() {
  process.env.NODE_ENV.includes('prod') ? void 0 : console.log(...arguments)
}

/**
 * @description 返回这个样式的颜色值
 * @param {string} type 样式名称 [ primary | success | warning | danger | text ]
 * @return {string} 16进制RGB
 */
const typeColor = (type = 'default') => {
  const colors = {
    default: '#35495E',
    primary: '#3488ff',
    success: '#43B883',
    warning: '#e6a23c',
    danger: '#f56c6c',
  }
  const color = colors[type]

  return color
}

/**
 * @description 打印彩色文字
 * @param {*} args 函数参数
 * @param {string} type? 颜色类型
 */
const colorful = (args, type = undefined) => {
  const source = Array.from(args).map((item) => ({ item, type })),
    items = source.map(({ item }) => item)

  const rule = items.reduce((result, item, index) => {
    const connector = index ? ' ' : '',
      fragment = typeof item === 'object' ? '\n%o' : `${connector}%c${item}`

    return `${result}${fragment}`
  }, '')

  const content = items.map((item, index) =>
    typeof item === 'object' ? item : `color: ${typeColor(source[index].type)}`
  )

  log(rule, ...content)
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {string} title title text
 * @param {string} info info text
 * @param {string} type style
 */
export const capsule = (title, info, type = 'primary') =>
  log(
    `%c ${title} %c ${info} %c`,
    `background: ${typeColor()};
      padding: 1px;
      border-radius: 3px 0 0 3px;
      color: #fff;`,
    `background: ${typeColor(type)};
      padding: 1px;
      border-radius: 0 3px 3px 0;
      color: #fff;`,
    'background: transparent;'
  )

/**
 * @description 打印不同类型样式的文字
 * @param 与 console.log 主参数形式相同，（副参数形式，即 message + optionalParams 会异常）
 */
export const primary = (...data) => colorful(data, 'primary'),
  success = (...data) => colorful(data, 'success'),
  warning = (...data) => colorful(data, 'warning'),
  danger = (...data) => colorful(data, 'danger')
