<template>
	<div class="dashboard-page">
		<page-header сlass="dashboard-page__header" />
		<div class="container">
			<div class="container__content">
				<div class="container__wrapper">
					<div class="container__feed-wrapper">
						<sort-tabs @sort="sortFeed" />
						<feed :sort-type="sortType" />
					</div>
					<div class="container__aside">
						<top-ideas class="aside__top" />
						<top-hunters class="aside__top" />
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
import topHunters from '../components/TopEmployer.vue';

	@Component({
		components : {
		  'feed': Feed,
			'sort-tabs': SortTabs,
			'page-header': Header,
			'top-ideas': topIdeas,
			'top-hunters': topHunters,
		}
	})
export default class Dashboard extends Vue{
		sortType = 'Внутренние сервисы'
	  sortFeed(sort) {
	    this.sortType = sort;
		}
	}
</script>

<style scoped lang="scss">
.dashboard-page {
  background-color: $grey;
  padding: 60px 0 50px;
}

.container {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &__content {
    min-width: 500px;
    width: 70%;
    margin: 0 auto;
    display: flex;
		position: relative;
    @media (max-width: 1300px) {
      width: 80%;
    }
    @media (max-width: 1150px) {
      width: 91%;
    }
  }
  &__aside {
		height: 92vh;
    min-width: 295px;
		width: 28%;
    margin-top: 15px;
    margin-left: 15px;
		border-radius: 5px;
		overflow-y: scroll;
		overflow-x: visible;
		&::-webkit-scrollbar {
			display: none;
		}
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

	.aside__top {
		margin-bottom: 35px;
	}
</style>
