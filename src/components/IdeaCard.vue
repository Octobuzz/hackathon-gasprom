<template>
	<div>
		<h2>{{ idea.idea_name }}</h2>
		<div v-html="idea.text" />
	</div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator';

	@Component()
export default class IdeaCard extends Vue {
	  @Prop(Object) idea;
	}
</script>

<style scoped>

</style>
