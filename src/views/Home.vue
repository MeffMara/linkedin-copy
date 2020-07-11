<template lang="pug">
  .container
    h2 Home Page
    button.btn.btn-primary(type='submit' @click="logout") Logout

  
</template>

<script>
import * as firebase from "firebase";

export default {
    name: 'Home',
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
}
</script>

<style lang="scss">

</style>