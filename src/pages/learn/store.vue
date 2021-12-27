<template>
  <div class="action">
    <button
      @click="friendsSet.add(`朋友${Date.now()}`), PURE_COMMIT({ friendsSet })"
    >
      结交新朋友
    </button>
    <button @click="deleteFriend(Array.from(friendsSet).pop())">
      依次与新的朋友绝交
    </button>
    <button @click="deleteFriend(Array.from(friendsSet)[0])">
      依次与老的朋友绝交
    </button>
    <button @click="friendsSet.clear(), PURE_COMMIT(friendsSet)">
      与所有朋友绝交
    </button>
    <button @click="beOpen">变得开放（自由地交新朋友）</button>
    <button @click="beConservative">变得保守（不再随意交新朋友）</button>
  </div>
  <div class="info">
    <p>一共拥有{{ friendsSet.size }}个朋友</p>
  </div>
  <div v-for="(comp, index) in friendsSet" :key="index">{{ comp }}</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('module')
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()
    return {
      friendsCircleLevel: computed(() => store.getters.friendsCircleLevel),
    }
  },
  data() {
    return {
      friendsMaker: [],
    }
  },
  computed: {
    ...mapState(['friendsSet']),
  },
  mounted() {
    const { PURE_COMMIT, addFriend, beOpen, $nextTick } = this
    PURE_COMMIT({
      friendsSet: new Set(['朋友1', '朋友2']),
    })
    $nextTick(() => {
      addFriend(`新朋友${this.friendsSet.size + 1} from nextTick`) // 直接或间接（通过对象内置的方法）修改响应对象的 property，（在 vue2 中会使得其 property 及依赖其 property 的响应变量表现不出响应性）
    })
    setTimeout(() => {
      addFriend(`新朋友${this.friendsSet.size + 1} from setTimeout`)
    }, 0)
    beOpen()
  },

  methods: {
    ...mapMutations(['PURE_COMMIT']),
    ...mapActions(['addFriend', 'deleteFriend']),
    beConservative() {
      clearInterval(this.friendsMaker.pop())
    },
    beOpen() {
      const { addFriend, friendsMaker } = this,
        friendPower = setInterval(() => {
          addFriend(`新朋友${Date.now()} from setInterval 1000`)
        }, 1000)

      friendsMaker.push(friendPower)
    },
  },
}
</script>
