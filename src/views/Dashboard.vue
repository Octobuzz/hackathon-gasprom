<template>
	<div class="dashboard-page">
		главная страница
		<router-link to="/create-idea">Создать идею</router-link>
		<feed></feed>
	</div>
</template>

<script>
	import { Vue, Component } from 'vue-property-decorator';
	import Feed from '../components/Feed.vue';

	@Component({
		components : {
		  'feed': Feed,
		}
	})
  export default class Dashboard {

  }
</script>

<style scoped>

</style>
