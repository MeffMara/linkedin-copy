<template lang="pug">
.login
	.login-form
		.login-logo
			include ../assets/img/big-logo.svg
		form
			input(type="text" placeholder="Your Email")
			input(type="password" placeholder="Password")
			button.btn.btn-connection(type='submit') Connection
		p You don`t have accont ? You can create one !
</template>

<script>
export default {
  name: "Login",
  // data() {
  //   return {};
  // },
  // methods: {},
};
</script>
