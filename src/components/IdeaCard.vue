<template>
	<div class="idea">
		<h2 class="idea__headline">
			{{ idea.idea_name }}
		</h2>
		<div
			class="idea__main"
			v-html="idea.text"
		/>
		<div class="idea__amount">
			Твинки:{{ twinkies }}
		</div>
		<add-twinks
			class="idea__button"
			:idea="idea"
		/>
	</div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';
import AddTwinks from './AddTwinks.vue';
import {mapState} from 'vuex';

	@Component({
		components: {
			AddTwinks
		},
		computed: {
			...mapState({
				ideaById: state => state.ideas_cards_by_id
			})
		}
	})
export default class IdeaCard extends Vue {
    @Prop(Object) idea;

    get twinkies() {
    	return this.ideaById[this.idea.id].twinkies;
    }
	}
</script>

<style scoped lang="scss">
.idea {
  padding: 15px 25px 25px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $white;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
  -moz-box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
  box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
}
</style>
