<template>
	<div class="dashboard-page">
		<page-header сlass="dashboard-page__header" />
		<div class="container">
			<div class="container__content">
				<div class="container__wrapper">
					<div class="container__feed-wrapper">
						<sort-tabs />
						<feed />
					</div>
					<div class="container__aside">
						<top-ideas />
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
import Header from '../components/Header.vue';
import topIdeas from '../components/TopIdeasDashboard.vue';

	@Component({
		components : {
		  'feed': Feed,
			'sort-tabs': SortTabs,
			'page-header': Header,
			'top-ideas': topIdeas,
		}
	})
export default class Dashboard {

	}
</script>

<style scoped lang="scss">
.dashboard-page {
  background-color: $grey;
  padding: 60px 0 50px;
}

.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &__content {
    min-width: 500px;
    width: 70%;
    margin: 0 auto;
    display: flex;
		position: relative;
  }
  &__aside {
		height: fit-content;
		width: 25%;
    min-width: 200px;
    margin-top: 15px;
    margin-left: 15px;
		background-color: $white;
		border-radius: 5px;
  }
  &__wrapper {
    width: 100%;
    margin: 0 auto;
		display: flex;
		justify-content: space-around;
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
