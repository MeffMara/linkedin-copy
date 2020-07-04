<template lang="pug">
  #app
    //Header
    hero
    .hello
      vs-button(vs-type="filled") Primary
      vs-select fdsfs
    h1 {{ movies }}
    router-view
</template>

<script>
import store from './store/store'
import Hero from '@/components/Hero'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Hero,
    Header,
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
