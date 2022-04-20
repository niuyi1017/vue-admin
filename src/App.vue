<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    test() {
      console.log('aa')
    }
  }
}
</script>

<style lang="stylus">
#app {
  height: 100vh;
}
</style>
