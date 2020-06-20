<template>
	<div>
		<button @click="toAuth">
			К Авторизации
		</button>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';

	@Component({})
export default class Home extends Vue {
	  toAuth() {
	    this.$router.push('/auth');
		}
	}
</script>

<style scoped>

</style>
