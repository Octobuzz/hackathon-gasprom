<template>
	<div class="fight">
		<page-header />
		<h1 class="fight__headline">
			Победа!
		</h1>
		<div class="fight__wrapper">
			<div class="fight__hunters">
				<top-hunters class="fight__top" />
				<p class="fight__power">
					Общая сила: {{ power }} твинка
				</p>
			</div>
			<div class="fight__versus">
				V.S
			</div>
			<div class="fight__ghosts">
				<div class="fight__ghost-top">
					<img
						class="fight__img"
						src="../assets/svg/terror.svg"
						alt="Призрак"
					/>
					<img
						class="fight__img"
						src="../assets/svg/horror.svg"
						alt="Призрак"
					/>
					<img
						class="fight__img"
						src="../assets/svg/novel.svg"
						alt="Призрак"
					/>
					<img
						class="fight__img"
						src="../assets/svg/fear.svg"
						alt="Призрак"
					/>
					<img
						class="fight__img"
						src="../assets/svg/nightmare.svg"
						alt="Призрак"
					/>
				</div>
				<p class="fight__power">
					Общая сила: 800 твинков
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import topHunters from '../components/TopEmployer.vue';
import user from '../api/User.js';

	@Component({
		components : {
			'page-header': Header,
			'top-hunters': topHunters,
		},

	})
export default class FinalFight extends Vue{
	  users = [];
	  power = 0;
	  mounted() {
	    this.loadUsers();
	  }
	  loadUsers() {
	    user.getUsers().then((response) => {
	      this.users = response.data;
	      this.countPower();
	  	});
	  }

	   countPower() {
	  	this.power = this.users.reduce((prev, next) => {
	  		return	prev + next.twinkies;
	  	}, 0);
	  }
	}
</script>

<style scoped lang="scss">
.fight {
  padding-top: 60px;
  background-color: $night;
  background-image: url("../assets/fight-back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  &__headline {
    @include reset-text();
    color: $white;
    font-size: 50px;
    margin: 45px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__versus {
    width: auto;
    font-size: 150px;
    font-weight: bold;
    color: $white;
  }
  &__hunters {
    padding: 20px;
    border: 5px solid $violet;
    border-radius: 20px;
    -webkit-box-shadow: 0px 2px 31px 0px rgba(89,96,234,0.9);
    -moz-box-shadow: 0px 2px 31px 0px rgba(89,96,234,0.9);
    box-shadow: 0px 2px 31px 0px rgba(89,96,234,0.9);
  }
  &__top {
    width: 400px;
  }
  &__ghosts {
    padding: 20px;
    border: 5px solid $red;
    border-radius: 20px;
    -webkit-box-shadow: 0px 2px 31px 0px rgba(200,79,79,1);
    -moz-box-shadow: 0px 2px 31px 0px rgba(200,79,79,1);
    box-shadow: 0px 2px 31px 0px rgba(200,79,79,1);
  }
  &__power {
    font-size: 24px;
    font-weight: bold;
    color: $white;
  }
  &__ghost-top {
    width: 400px;
    height: 630px;
    padding: 5px;
    background-color: $white;
    position: relative;
  }
}
</style>
