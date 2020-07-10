<template lang="pug">
.signup
	.signup-form
		.signup-logo
			include ../assets/img/big-logo.svg
		form
			label You email
			input(type="text" placeholder="Your Email")
			label you password
			input(type="password" placeholder="Password")
			label reapeat you password
			input(type="password" placeholder="Password")
			button.btn.btn-connection(type='submit') Register
		p Thank`s what choose us! We made togather!
</template>

<script>
export default {
  name: "SignUp",
  // data() {
  //   return {};
  // },
  // methods: {},
};
</script>
