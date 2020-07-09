<template lang="pug">
  #app
    Header
    router-view
    //- hero
    //- .hello
    //-   vs-button(vs-type="filled") Primary
    //-   vs-select fdsfs
    //- h1 {{ movies }}
    //- p {{ time }}
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
  mounted () {
      this.getDate()
  },
  data() {
    return {
      movies: store.movies,
      time: ''
    };
  },
  methods: {
    getDate () {
      let time = new Date()
      this.time = time
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss';
  h1{
    color: brown;
  }
</style>
