<template>
	<div class="personal-page">
		<div class="personal-page__user-info">
			Личный кабинет
			<p>Имя: {{ user.username }}</p>
			<p>email: {{ user.email }}</p>
			<p>Поймано призраков: {{ user.ghosts }}</p>
			<p>Вы можете подарить призраков: {{ user.present_ghosts }}</p>
			<p>Твинки: {{user.twinkies}}</p>
		</div>
		<div class="personal-page__idea-cards">
			Идеи которые я поддерживаю
			<div>
				<idea
					v-for="(idea, index) in ideas"
					:key="index"
					:idea="idea"
					@click.native="toIdea(idea.id)"
				/>
				<div
					v-infinite-scroll="loadMore"
					infinite-scroll-disabled="busy"
					infinite-scroll-distance="10"
				/>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import {mapState} from 'vuex';
import IdeaCard from '../components/IdeaCard.vue';
import Ideas from "../api/Ideas.js";

@Component({
	components: {
	  'idea': IdeaCard,
	},
	computed: {
	  ...mapState({
			idea_cards: state => state.ideas_cards,
			user: state => state.user
		})
	}
}
)
export default class Personal extends Vue {
  posts = 10;

  created() {
  	this.loadIdeas();
  }

  loadMore(){
    	this.posts+=10;
  }

  loadIdeas() {
  	Ideas.getIdeas().then((response) => {
  		this.$store.commit('setIdeasCard', response.data);
  	});
  }

  get ideas() {
  	return this.idea_cards.filter((el) => {
  		if (el.create_user) {
  			return el.create_user.id === this.user.id;
  		}
  	});
  }

  toIdea(id) {
  	return;
  }
}
</script>

<style scoped lang="scss">
.personal-page {
	display: flex;
	flex-direction: row;

	&__idea-cards {
		width: 100%;
		overflow: scroll;
	}
}
</style>
