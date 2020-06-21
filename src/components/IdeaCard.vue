<template>
	<div class="idea">
		<div class="idea__twink-summ">
			Вложено {{ twinkies || 0 }}
		</div>
		<div class="idea__preheadline">
			<span class="idea__creator">{{ idea.create_user ? idea.create_user.username : "Ольга Пастухова" }}</span>
			предложил(а) идею в
			<span class="idea__tag">{{ idea.tag }}</span>
		</div>
		<h2 class="idea__headline">
			{{ idea.idea_name }}
		</h2>
		<div
			class="idea__main"
			v-html="idea.text"
		/>
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
	position: relative;
	padding: 45px 25px 25px;
	margin-bottom: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: $white;
	cursor: pointer;
	border-radius: 5px;
	text-align: left;
	-webkit-box-shadow: 0px 2px 22px -10px rgba(153, 153, 153, 0.3);
	-moz-box-shadow: 0px 2px 22px -10px rgba(153, 153, 153, 0.3);
	box-shadow: 0px 2px 22px -10px rgba(153, 153, 153, 0.3);

	&__main {
		margin-bottom: 15px;
	}

	&__headline {
		font-size: 20px;
		text-align: left;
	}

	&__creator {
		color: $violet;
	}
	&__tag {
		color: $red;
	}

	&__twink-summ {
		position: absolute;
		top: -27px;
		padding: 15px 10px 15px 15px;
		background-color: $azure;
		border-radius: 5px;
		color: $white;
		font-weight: bold;
		display: flex;

		&::after {
			content: url("../assets/svg/macaron.svg");
			width: 40px;
			height: 30px;
			margin-left: 4px;
			margin-top: -4px;

		}
	}

	&__preheadline {
		padding-left: 65px;
		font-size: 18px;
		font-weight: bold;
		position: relative;
		align-self: flex-start;
		margin-bottom: 20px;

		&::before {
			content: url("../assets/svg/young.svg");
			box-sizing: border-box;
			width: 55px;
			height: 55px;
			position: absolute;
			top: -11px;
			left: 2px;
			border: 3px solid $violet;
			border-radius: 50px;
			}
		}
	}

</style>
