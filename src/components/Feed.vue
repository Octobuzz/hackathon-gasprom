<template>
	<div class="idea-feed">
		<idea
			v-for="(idea, index) in ideas"
			:key="index"
			:idea="idea"
			@click.native="toIdea(idea.id)"
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
import { mapState }  from 'vuex';

@Component({
	components: {
	  'idea': IdeaCard,
	},
	computed: {
		...mapState({
			ideas: state => state.ideas_cards_by_id,
		}),
	}
})
export default class Feed extends Vue {
		posts = 10;

		mounted() {
		  this.loadIdeas();
		}

		loadIdeas() {
		  this.posts+=10;
			Ideas.getIdeas().then((response) => {
			  this.$store.commit('setIdeasCard', response.data);
			});
		}

		toIdea(id) {
		  this.$router.push(`/idea/${id}`);
		}
}
</script>

<style scoped lang="scss">
	.idea-feed {
		height: 85vh;
		margin: 0 auto;
	}
</style>
