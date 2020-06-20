<template>
	<div class="short-card">
		<h2 class="short-card__headline">
			{{ idea.idea_name }}
		</h2>
		<div class="short-card__investments">
			ТВИНКИ:{{ twinkies }}
		</div>
	</div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';
import {mapState} from 'vuex';

  @Component({
  	computed: {
  		...mapState({
  			ideaById: state => state.ideas_cards_by_id
  		})
  	}
  })
export default class shortIdeaCard extends Vue {
    @Prop(Object) idea;

    get twinkies() {
    	return this.ideaById[this.idea.id].twinkies;
    }
  }
</script>

<style scoped lang="scss">
	.short-card {
		font-size: 10px;
		border: 1px solid $grey;
		width: 100%;
		height: 100px;
	}
</style>
