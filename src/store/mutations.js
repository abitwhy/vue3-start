// 根级别 mutations

export const PURE_COMMIT = (state, payload) => {
  const stateKeys = Object.keys(state),
    payloadKeys = typeof payload === 'object' ? Object.keys(payload) : []

  payloadKeys.forEach((payloadKey) => {
    if (!stateKeys.includes(payloadKey)) return

    let newState = payload[payloadKey]
    // 为部分对象类型的值作拷贝（否则无法响应性地更新）。改进方向：深拷贝考虑使用 lodash 的 cloneDeep
    if (typeof newState === 'object') {
      if (newState instanceof Set) {
        newState = new Set(newState.values())
      } else if (newState instanceof Map) {
        newState = new Map(newState.entries())
      } else if (newState instanceof Array) {
        newState = newState.concat()
      } else {
        newState = { ...newState }
      }
    }
    state[payloadKey] = newState
  })
}
