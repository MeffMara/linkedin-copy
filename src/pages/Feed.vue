<template lang="pug">
	#feed
		.container
			.content
				.title.col-12.with-border
					h2 New Post
				.post-box.col-12
					textarea.post-box__items(
						placeholder="What is your mind`s"
					)
					.post-box__items.content__button
						button.file.make-it-slow
							include ../assets/img/posts/posts-screp.svg
						button.image.make-it-slow
							include ../assets/img/posts/posts-img.svg
						button.video.make-it-slow
							include ../assets/img/posts/posts-video.svg
						button.send.make-it-slow
							include ../assets/img/posts/posts-send.svg
			sidebar

</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
	name: "Feed",
	components: {
		Sidebar
	}
};
</script>
