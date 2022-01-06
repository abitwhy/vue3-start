<template>
  <div class="network"></div>
</template>

<script>
import net from '../../network/net'
import { posts, users } from '../../network/api/omapi'

export default {
  async created() {
    let res = await fetch('/omapi/users'),
      data = await res.json()
    console.log('fetch res', res)
    console.log('fetch data', data)

    res = await net.get('/omapi/users')
    data = res.data
    console.log('net res', res)
    console.log('net data', data)

    res = await posts.get('2', { p: 1 })
    data = res.data
    console.log('api get res', res)
    console.log('api get data', data)

    res = await posts.post({ userId: '1', id: '888', title: 'lol' })
    data = res.data
    console.log('api post res', res)
    console.log('api post data', data)

    res = await users()
    data = res.data
    console.log('api users res', res)
    console.log('api users data', data)
  },
}
</script>

<style></style>
