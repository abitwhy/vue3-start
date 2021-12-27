import { PURE_COMMIT } from '../mutations'

const module = {
  namespaced: true,

  state() {
    return {
      friendsSet: new Set(['ego']),
    }
  },

  getters: {
    friendsCircleLevel: (state) => {
      // 注意：configs 内部有序
      const configs = [
        {
          level: '无',
          endpoint: -1,
        },
        {
          level: '小',
          endpoint: 2,
        },
        {
          level: '中',
          endpoint: 7,
        },
        {
          level: '大',
          endpoint: 10,
        },
        {
          level: '无穷',
          endpoint: Infinity,
        },
        {
          level: '未知规模',
          endpoint: NaN,
        },
      ]

      let level = configs[configs.length - 1].level
      // Array.prototype.some 决定了 configs 有序
      configs.some((config) => {
        return (
          state.friendsSet.size <= config.endpoint && (level = config.level)
        )
      })
      return level
    },
  },

  mutations: {
    PURE_COMMIT,
  },

  actions: {
    /**
     * 结交一个新朋友
     * @param {*} param0
     * @param {*} id 公司 id
     * @returns {Boolean} 是否结交成功（添加重复的值会导致添加失败）
     */
    addFriend: ({ state, commit }, id) => {
      const { friendsSet } = state,
        successful = !friendsSet.has(id)

      if (!successful) return false

      friendsSet.add(id)
      commit('PURE_COMMIT', friendsSet)

      return true
    },

    /**
     * 与某个朋友绝交
     * @param {String} id 公司 id
     * @returns {Boolean} 是否绝交成功（删除不存在的值会导致删除失败）
     */
    deleteFriend: ({ state, commit }, id) => {
      const { friendsSet } = state,
        successful = friendsSet.has(id)

      if (!successful) return false

      friendsSet.delete(id)
      commit('PURE_COMMIT', friendsSet)

      return true
    },
  },
}

export default module
