<template>
	<div class="add-twinks">
		<button
			class="add-twinks__button"
			@click.stop="AcceptIdea"
		>
			Хочу поучавствовать в решении
		</button>
	</div>
</template>

<script>
import {Component, Vue, Prop} from 'vue-property-decorator';
import ideas from "../api/Ideas";
import { mapState } from "vuex";

  @Component({
  	computed: {
		  ...mapState({
  			user: state => state.user
  		})
  	}
  })
export default class AddTwinks extends Vue {
    @Prop(Object) idea;

    AcceptIdea() {
    	ideas.updateIdea(this.idea.id, {ready_users: [this.user]});
    }
  }
</script>

<style lang="scss" scoped>

</style>
