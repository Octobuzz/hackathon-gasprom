<template>
	<div>
		<h2>{{ idea.idea_name }}</h2>
		<div v-html="idea.text" />
		<add-twinks
			:idea="idea"
		/>
		<div>Твинки:{{ twinkies }}</div>
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

<style scoped>

</style>
