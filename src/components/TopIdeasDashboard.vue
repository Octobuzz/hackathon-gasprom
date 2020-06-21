<template>
	<div class="top">
		<p class="top__headline">
			Топ идей
		</p>
		<idea
			v-for="(idea, index) in topIdeas.slice(0,5)"
			:key="index"
			class="top__idea"
			:idea="idea"
			@click.native="toIdea(idea.id)"
		/>
		<modal
			v-if="modalShow"
			:id="activeIdea"
			@close="modalShow = false"
		/>
	</div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';
import shortIdeaCard from './ShortIdeaCard.vue';
import {mapState} from "vuex";
import Ideas from "../api/Ideas";
import Modal from "./Modal.vue";

  @Component({
  	components: {
  		'idea': shortIdeaCard,
  		Modal,
  	},
  	computed: {
  		...mapState({
  			ideas: state => state.ideas_cards,
  		}),
  	}
  })
export default class TopIdeasDashboard extends Vue {
    activeIdea = 0;
    modalShow = false;
  	mounted() {
    	this.loadIdeas();
  	}

  	get topIdeas() {
    	return this.ideas.sort((a, b) => {
    		return Number(b.twinkies) - Number(a.twinkies);
    	});
  	}

  	loadIdeas() {
    	Ideas.getIdeas().then((response) => {
    		this.$store.commit('setIdeasCard', response.data);
    	});
  	}

    toIdea(id) {
    	this.activeIdea = id;
    	this.modalShow = true;
    }
  }
</script>

<style lang="scss" scoped>
.top {
  padding: 5px 10px;
  &__headline {
    padding-left: 50px;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    &::before {
      content: url("../assets/svg/champion.svg");
      width: 45px;
      height: 45px;
      position: absolute;
      top: 50%;
      left: 60px;
      transform: translateY(-50%);
    }
  }
}
</style>
