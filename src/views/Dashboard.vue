<template>
	<div class="dashboard-page">
		<div class="container">
			<div class="container__content">
				<div class="container__wrapper">
					<div class="container__feed-wrapper">
						<sort-tabs />
						<feed />
					</div>
					<div class="container__aside">
						<p class="container__try">
							пробный рейтинг
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Feed from '../components/Feed.vue';
import SortTabs from '../components/SortTabs.vue';

	@Component({
		components : {
		  'feed': Feed,
			'sort-tabs': SortTabs,
		}
	})
export default class Dashboard {

	}
</script>

<style scoped lang="scss">
.dashboard-page {
  background-color: $grey;
  padding: 75px 0 50px;
	height: 100vh;
}

.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  //background-color: green; /**/
  &__content {
    width: 70%;
    margin: 0 auto;
    display: flex;
		position: relative;
    //background-color: red; /**/
  }
  &__aside {
		height: 100px;
		width: 20%;
		background-color: $white;
		border-radius: 5px;
    //background-color: blue; /**/
  }
  &__wrapper {
    width: 100%;
    margin: 0 auto;
		display: flex;
		justify-content: space-around;
    //background-color: yellow; /**/
  }
	&__feed-wrapper {
		width: 650px;
		overflow-y: scroll;
		overflow-x: visible;
		&::-webkit-scrollbar {
			display: none;
		}
	}
}
</style>
