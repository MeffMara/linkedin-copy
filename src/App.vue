<template lang="pug">
  #app
    Header
    hello
    h1 {{ movies }}
    router-view
</template>

<script>
import store from './store/store'
import Hello from '@/components/Hello'
import Header from '@/components/Header'


export default {
  name: 'App',
  components: {
    Hello,
    Header
  },
  data() {
    return {
      movies: store.movies,
    };
  },
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';
  h1{
    color: brown;
  }
</style>
