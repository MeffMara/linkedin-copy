<template lang="pug">
.login
	.login-form
		.login-logo
			include ../assets/img/big-logo.svg
		form
			input(type="text" v-model="email" placeholder="Your Email")
			input(type="password" v-model="password" placeholder="Password")
			button.btn.btn-connection(type='submit' @click="login") Connection
		p You don`t have accont ? You can 
			router-link(to="/signup")  create one !
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
		email: "",
		password: ""
	};
  },
  methods: {
		login: function(e) {
			e.preventDefault();
			firebase
			.auth()
			.signInWithEmailAndPassword(this.email, this.password)
			.then(function (user) {
				alert("Well done! Your are connecting!" , user);
			},
			function (err) {
				alert('Oop`s ' + err.message)
			}
			);
		}
	},
};
</script>
