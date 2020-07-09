<template lang="pug">
	#feed
		.container
			.content
				h2.title New Post
				textarea(
					placeholder="What is your mind`s"
				)
				.content__button
					include ../assets/img/posts/posts-screp.svg
					
			.sidebar
				h2.title Sidebar

</template>

<script>
export default {
	name: 'Feed'
}
</script>
