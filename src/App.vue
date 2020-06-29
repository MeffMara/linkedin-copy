<template lang="pug">
  #app
    h1 hello
    hello
    h1 {{ movies }}
</template>

<script>
import store from './store/store'
import Hello from '@/components/Hello'

export default {
  name: 'App',
  components: {
    Hello,
  },
  data() {
    return {
      movies: store.movies,
    };
  },
}
</script>

<style lang="scss">
  h1{
    color: brown;
  }
</style>
