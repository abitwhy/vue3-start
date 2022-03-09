/**
 * 改变页面标题
 *
 * @param {Router} router vue router 实例
 * @param {RouteLocationNormalized} route 当前路由实例
 */
export const setPageTitle = (router, route) => {
  const matchedTitle = getMetaTitle(route)
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
 */
const getMetaTitle = (route) => {
  const { meta, matched } = route
  const availableTitles = [meta.title]
  if (matched) {
    availableTitles.concat(matched.reverse().map(({ meta }) => meta.title))
  }
  return availableTitles.find((title) => title) || ''
}

/**
 * 从 meta 中获取标题
 *
 * @param {*} meta 路由元信息
 * @see {@link https://router.vuejs.org/zh/api/#meta}
 * @param {*} option 配置
 * @returns
 */
export const metaTitleAdapter = (meta, option) => {
  const defaultOption = {
      breadcrumb: false,
    },
    { breadcrumb } = { ...defaultOption, ...option }
  const { title = '' } = meta,
    { base, breadcrumb: breadcrumbTitle = title } = title
  return breadcrumb ? breadcrumbTitle : base || title
}
