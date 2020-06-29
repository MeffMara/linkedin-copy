<template lang='pug'>
	.container
		span login: {{ login }}
		input
		button Click Me
		textarea
		button Show
		button Hide
		ul
			li Моя первая задача
</template>

<script>
export default {
	name: 'Hello',
	data () {
		return {
			login: 'Arkadiy98'
		}
	}
}
</script>

<style lang="scss">

</style>