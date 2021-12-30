<template>
  <div class="network"></div>
</template>

<script>
export default {
  async created() {
    const res = await fetch('/api/users')
    console.log('res', res)
    fetch('/api/users').then((response) => {
      console.log('response', response)
    })
  },
}
</script>

<style></style>
