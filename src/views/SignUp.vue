<template lang="pug">
.signup
	.signup-form
		.signup-logo
			include ../assets/img/big-logo.svg
		form
			label You email
			input(type="text" v-model="email" placeholder="Your Email")
			label you password
			input(type="password" v-model="password" placeholder="Password")
			button.btn.btn-connection(type='submit' @click="signUp") Sign Up
		p Or back to
			| 
			router-link(to="/login") Login
</template>

<script>
// import firebase from "firebase";
import * as firebase from "firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function(e) {
	e.preventDefault();
	firebase
	.auth()
	.createUserWithEmailAndPassword(this.email, this.password)
	.then(function (user) {
		alert("Your accont has been created!" , user);
	},
	function (err) {
		alert('Oop`s ' + err.message)
	}
	);
    }
  }
};
</script>
