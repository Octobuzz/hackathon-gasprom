<template>
	<div class="top">
		<p class="top__headline">
			Топ охотников
		</p>
		<top-user
			v-for="(user, index) in topUsers.slice(0,5)"
			:key="index"
			class="top__idea"
			:user="user"
		/>
	</div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';
import workerCard from './workerCard.vue';
import Modal from "./Modal.vue";
import user from "../api/User";

  @Component({
  	components: {
  		'top-user': workerCard,
  	},
  })
export default class TopIdeasDashboard extends Vue {
    activeIdea = 0;
    modalShow = false;
    users = [];
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
    		this.users = response.data;
    	}).catch((e) => {
    	  console.log(e);
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
				left: 55px;
				transform: translateY(-50%);
				@media (min-width: 1550px){
					left: 45px;
				}
			}
		}
	}
</style>
