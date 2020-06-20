<template>
	<div class="dashboard-page">
		<div class="container">
			<div class="container__content">
				<div class="container__wrapper">
					<sort-tabs />
					<feed />
				</div>
			</div>
			<div class="container__aside">
				<p class="container__try">
					пробный рейтинг
				</p>
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
  margin-top: 60px;
  padding-bottom: 50px;
  overflow: scroll;
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
    //background-color: red; /**/
  }
  &__aside {
    width: 20%;
    //background-color: blue; /**/
  }
  &__wrapper {
    width: 90%;
    margin: 0 auto;
    //background-color: yellow; /**/
  }
}
</style>
