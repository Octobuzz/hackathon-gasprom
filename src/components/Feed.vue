<template>
	<div class="idea-feed">
		<idea
			v-for="idea in ideas"
      :idea="idea"
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
}
</script>

<style scoped>

</style>
