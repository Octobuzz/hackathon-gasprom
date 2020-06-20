<template>
	<div class="idea-feed">
		<div v-for="post in posts">
			{{post}}
		</div>
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		</div>
	</div>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator';

@Component()
  export default class Feed extends Vue {
		posts = 10;

		loadMore() {
		  this.posts+=100;
		}
  }
</script>

<style scoped>

</style>
