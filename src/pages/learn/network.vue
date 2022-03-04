<template>
  <div class="network"></div>
</template>

<script>
import log from '@/utils/log'
import net from '../../network/net'
import { posts, users } from '../../network/api/omapi'

export default {
  async created() {
    let res = await fetch('/omapi/users'),
      data = await res.json()
    log('fetch res', res)
    log('fetch data', data)

    res = await net.get('/omapi/users')
    data = res.data
    log('net res', res)
    log('net data', data)

    res = await posts.get('2', { p: 1 })
    data = res.data
    log('api get res', res)
    log('api get data', data)

    res = await posts.post({ userId: '1', id: '888', title: 'lol' })
    data = res.data
    log('api post res', res)
    log('api post data', data)

    res = await users()
    data = res.data
    log('api users res', res)
    log('api users data', data)
  },
}
</script>

<style></style>
