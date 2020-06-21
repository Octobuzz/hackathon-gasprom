<template>
	<div class="short-card">
		<p class="short-card__username">
			{{ user.username || "Александр" }}
		</p>
		<div class="short-card__wrapper">
			<h2 class="short-card__headline">
				{{ user.department ? user.department.department_name : 'Отдел разработки' }}
			</h2>
			<div class="short-card__investments">
				Твинки: {{ user.twinkies }}
			</div>
			<div class="short-card__ghost">
				Призраки: {{ user.ghosts }}
			</div>
		</div>
	</div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';

  @Component()
export default class workerCard extends Vue {
    @Prop(Object) user;
  }
</script>

<style scoped lang="scss">
	.short-card {
		width: 95%;
		margin: 0 auto;
		height: 100px;
		padding: 5px;
		display: flex;
		justify-content: space-between;
		border: 1px solid $grey;
		font-size: 10px;
		position: relative;
		&::before {
			content: url("../assets/svg/young.svg");
			box-sizing: border-box;
			width: 55px;
			height: 55px;
			position: absolute;
			top: 15px;
			left: 20px;
			border: 3px solid $violet;
			border-radius: 50px;
		}
		&__wrapper {
			display: flex;
			flex-direction: column;
		}
		&__headline {
			@include reset-text();
			width: 175px;
			margin-bottom: 10px;
			text-align: left;
		}
		&__username {
			@include reset-text();
			margin-top: 10px;
			padding-right: 8px;
			padding-top: 60px;
			padding-left: 5px;
			font-size: 16px;
			width: 27%;
			border-right: 1px solid $grey;
		}
		&__investments {
			color: $red;
			font-size: 16px;
			font-weight: bold;
			text-align: left;
		}
		&__ghost {
			color: $violet;
			font-size: 16px;
			font-weight: bold;
			text-align: left;
		}
	}
</style>
