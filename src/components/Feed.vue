<template>
	<div class="idea-feed">
		<idea
			v-for="(idea, index) in ideas.slice().reverse()"
			:key="index"
			:idea="idea"
			@click.native="toIdea(idea.id)"
		/>
		<modal
			v-if="modalShow"
			:id="activeIdea"
			@close="modalShow = false"
		/>
		<div
			v-infinite-scroll="loadMore"
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
import Modal from '../components/Modal.vue';

@Component({
	components: {
	  'idea': IdeaCard,
		Modal,
	},
	computed: {
		...mapState({
			ideas: state => state.ideas_cards,
		}),
	}
})
export default class Feed extends Vue {
		posts = 10;
		activeIdea = 0;
		modalShow = false;

		mounted() {
		  this.loadIdeas();
		}

		loadIdeas() {
			Ideas.getIdeas().then((response) => {
			  this.$store.commit('setIdeasCard', response.data);
			});
		}

		loadMore(){
		  this.posts+=10;
		}

		toIdea(id) {
		  this.activeIdea = id;
		  this.modalShow = true;
		}
}
</script>

<style scoped lang="scss">
	.idea-feed {
		height: 85vh;
		margin: 0 auto;
	}
</style>
