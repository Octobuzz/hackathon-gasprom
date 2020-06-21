<template>
	<div class="top">
		<p class="top__headline">
			Топ охотников
		</p>
		<idea
			v-for="(idea, index) in topUsers.slice(0,5)"
			:key="index"
			class="top__idea"
			:idea="idea"
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
import user from "../api/User";

  @Component({
  	components: {
  		'idea': shortIdeaCard,
  		Modal,
  	},
  	computed: {
  		...mapState({
  			users: state => state.users,
  		}),
  	}
  })
export default class TopIdeasDashboard extends Vue {
    activeIdea = 0;
    modalShow = false;
    mounted() {
    	this.loadUsers();
    }

    get topUsers() {
    	return this.users.sort((a, b) => {
    		return Number(b.ghosts) - Number(a.ghosts);
    	});
    }

    loadUsers() {
    	user.getUsers().then((response) => {
    		this.$store.commit('setUsers', response.data);
    	});
    }
  }
</script>

<style lang="scss" scoped>
	.top {
		padding: 5px 10px;
		background-color: $white;
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
