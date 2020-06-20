<template>
	<div class="idea-feed">
		<idea
			v-for="(idea, index) in ideas"
			:idea="idea"
      :key="index"
		/>
		<div
			v-infinite-scroll="loadIdeas"
			infinite-scroll-disabled="busy"
			infinite-scroll-distance="10"
		/>
	</div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';
import Ideas from '../api/Ideas';
import IdeaCard from './IdeaCard.vue';

@Component({
	components: {
	  'idea': IdeaCard,
	}
})
export default class Feed extends Vue {
		posts = 10;
		ideas = []

		mounted() {
		  this.loadIdeas();
		}

		loadIdeas() {
		  this.posts+=10;
			Ideas.getIdeas().then((response) => {
			  this.ideas = response.data;
			});
		}
}
</script>

<style scoped>

</style>
