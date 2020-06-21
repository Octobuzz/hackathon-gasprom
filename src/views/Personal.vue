<template>
	<div class="personal">
		<div class="personal__user">
			<h1 class="personal__headline">
				Личный кабинет
			</h1>
			<div class="personal__job-wrapper">
				<img
					class="personal__img"
					src="../assets/svg/superhero.svg"
					alt="Аватар"
					width="70"
					height="70"
				/>
				<p class="personal__job">
					Аналитик в отделе маркетинга
				</p>
			</div>
			<div class="personal__info-wrapper">
				<p class="personal__info">
					Имя: {{ user.username }}
				</p>
				<p class="personal__info">
					Email: {{ user.email }}
				</p>
				<p class="personal__info">
					Поймано призраков: {{ user.ghosts }}
				</p>
				<p class="personal__info">
					Подарить призраков: {{ user.present_ghosts }}
				</p>
				<p class="personal__info">
					Твинки: {{ user.twinkies }}
				</p>
			</div>
			<router-link
				class="personal__button"
				to="/dashboard"
			>
				На главную
			</router-link>
		</div>
		<div class="personal__idea-cards">
			<h2 class="personal__headline">
				Идеи, которые я поддерживаю:
			</h2>
			<div class="personal__card-wrapper">
				<idea
					v-for="(idea, index) in ideas"
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
		</div>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import {mapState} from 'vuex';
import IdeaCard from '../components/IdeaCard.vue';
import Ideas from "../api/Ideas.js";
import Modal from '../components/Modal.vue';

@Component({
	components: {
	  'idea': IdeaCard,
		Modal,
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
  activeIdea = 0;
  modalShow = false;

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
  		} else {
  		  return  !!el.ready_users.find((el) => {
  		    return el.id === this.user.id;
  			});
  		}
  	});
  }

  toIdea(id) {
  	this.activeIdea = id;
  	this.modalShow = true;
  }
}
</script>

<style scoped lang="scss">
.personal {
	display: flex;
	flex-direction: row;
  background-color: $grey;
  &__user {
    box-sizing: border-box;
    width: 20%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $white;
    background-color: $azure;
  }
  &__job-wrapper {
    width: 275px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__img {
    box-sizing: border-box;
    margin-right: 25px;
    border: 5px solid $button-violet;
    border-radius: 50px;
  }
  &__job {
    @include reset-text();
    width: 180px;
    text-align: left;
  }
  &__info-wrapper {
    width: 275px;
    text-align: left;
    margin-bottom: 15px;
  }
	&__idea-cards {
		width: 70%;
    margin: 0 auto;
		overflow: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	}
  &__headline {
    @include reset-text();
    margin: 30px 0;
  }
  &__button {
    @include reset-button();
    width: 275px;
    padding: 10px 15px;
    background-color: $button-violet;
    color: $white;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: $button-hover;
    }
    &:active {
      background-color: $button-violet;
    }
  }
}
</style>
