<template>
	<div class="idea-feed">
		<idea
			v-for="(idea, index) in filterIdeas.slice().reverse()"
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
import {Component, Prop, Vue} from 'vue-property-decorator';
import Ideas from '../api/Ideas';
import IdeaCard from './IdeaCard.vue';
import {mapState} from 'vuex';
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
  @Prop(String) sortType;
		posts = 10;
		activeIdea = 0;
		modalShow = false;

		created() {
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

		get filterIdeas () {
			return this.ideas.filter((el) => el.tag === this.sortType);
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
