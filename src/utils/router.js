/**
 * 设置页面标题
 *
 * @param {RouteLocationNormalized} route 路由实例
 * @param {Object} option 配置
 */
export const setPageTitle = (
  route,
  /**
   * @property {function} titleAdapter? 用户自定义标题适应器回调
   * @see {@link getMetaTitle}
   */
  option
) => {
  const defaultOption = {
      titleAdapter: undefined, // 默认值由底层函数决定
    },
    { titleAdapter } = {
      ...defaultOption,
      ...option,
    }
  const matchedTitle = getMetaTitle(route, { titleAdapter })
  const title = matchedTitle
  if (title) document.title = title
  // 若未找到 title，默认标题由 ~index.html 里 <title> 标签设定
}

/**
 * 获取路由 meta 里的标题
 *
 * @param {RouteRecordNormalized} route
 * @returns {String} 标题，未找到时返回''
 * @param {Object} option 配置
 */
const getMetaTitle = (
  route,
  /**
   * @property {function} titleAdapter? 用户自定义标题适应器回调，接受参数：(source)
   */
  option
) => {
  const defaultOption = {
      titleAdapter: undefined,
      //#region undefined 默认值代表：
      // 1.默认值由本函数决定，默认值在解构赋值处提供，否则：
      // 2.默认值由底层函数决定
      //#endregion
    },
    {
      titleAdapter = defaultTitleAdapter,
      //#region defaultTitleAdapter 和 titleAdapter 不得同名，存在语法问题：
      // ReferenceError: Cannot access 'titleAdapter' before initialization
      //#endregion
    } = {
      ...defaultOption,
      ...option,
    }
  const { meta, matched } = route
  const matchedMeta = matched.reverse().map(({ meta }) => meta)
  const metaStack = [meta, ...matchedMeta, '']
  const titleStack = metaStack.map((meta) => titleAdapter(meta))
  return titleStack.find((title) => typeof title === 'string')
}

/**
 * 默认标题适应器，一种规范结构
 *
 * @param {Object} meta 路由元信息
 * @see {@link https://router.vuejs.org/zh/api/#meta}
 * @param {Object} option 配置
 * @returns {String} 标题
 */
export const defaultTitleAdapter = (meta, option) => {
  const defaultOption = {
      breadcrumb: false,
    },
    { breadcrumb } = { ...defaultOption, ...option }
  const { title } = meta,
    { base, breadcrumb: breadcrumbTitle } =
      title || 'Skip deconstruction syntax error'
  //#region 提供备选可解构值，而不是赋解构默认值，来避免累计解构错误，目的是：
  // 避免污染 title
  // 避免与默认返回值混淆（虽然赋解构默认值也可避免这个问题，即赋一个与默认返回值不同类型的可解构值，如 false ）
  //#endregion
  const titleStack = [base, title, '']
  if (breadcrumb && breadcrumbTitle) titleStack.unshift(breadcrumbTitle)
  return titleStack.find((title) => typeof title === 'string')
}
