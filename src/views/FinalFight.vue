<template>
	<div class="fight">
		<page-header />
		<h1 class="fight__headline">
			Финальная битва!
		</h1>
		<div class="fight__wrapper">
			<div class="fight__bankers" />
			<div class="fight__ghosts" />
		</div>
	</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';

	@Component({
		components : {
			'page-header': Header,
		}
	})
export default class FinalFight extends Vue{
	}
</script>

<style scoped lang="scss">
.fight {
  padding-top: 60px;
  background-color: $night;
  background-image: url("../assets/fight.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &__headline {
    @include reset-text();
    color: $white;
    font-size: 50px;
    margin: 35px 0;
  }
}
</style>
