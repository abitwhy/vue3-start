/**
 * 设置页面标题
 *
 * @param {Router} router vue router 实例
 * @param {RouteLocationNormalized} route 当前路由实例
 * @param {Object} option 配置
 */
export const setPageTitle = (
  router,
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
  const homeRoute = router.getRoutes().find(({ path }) => path === '/')
  const title = matchedTitle || getMetaTitle(homeRoute)
  if (title) document.title = title
  // 如若未找到 title，默认标题由 <title> 标签设定
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
  const availableMeta = [meta]
  if (matched) {
    availableMeta.concat(matched.reverse().map(({ meta }) => meta))
  }
  const availableTitles = availableMeta.map((meta) => titleAdapter(meta))
  return availableTitles.find((title) => title) || ''
}

/**
 * 默认标题适应器，一种规范结构
 *
 * @param {*} meta 路由元信息
 * @see {@link https://router.vuejs.org/zh/api/#meta}
 * @param {*} option 配置
 * @returns
 */
export const defaultTitleAdapter = (meta, option) => {
  const defaultOption = {
      breadcrumb: false,
    },
    { breadcrumb } = { ...defaultOption, ...option }
  const { title = '' } = meta,
    { base, breadcrumb: breadcrumbTitle = title } = title
  return breadcrumb ? breadcrumbTitle : base || title
}
