<template>
	<div class="short-card">
		<p class="short-card__username">
			{{ idea.create_user ? idea.create_user.username : "Александр" }}
		</p>
		<div class="short-card__wrapper">
			<h2 class="short-card__headline">
				{{ idea.idea_name }}
			</h2>
			<div class="short-card__investments">
				Твинки: {{ twinkies }}
			</div>
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
    width: 98%;
		margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    border: 1px solid $grey;
		font-size: 10px;
    position: relative;
    &::before {
      content: url("../assets/svg/young.svg");
      box-sizing: border-box;
      width: 55px;
      height: 55px;
      position: absolute;
      top: 15px;
      left: 15px;
      border: 3px solid $violet;
      border-radius: 50px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
    }
    &__headline {
      @include reset-text();
      width: 175px;
      text-align: left;
    }
    &__username {
      @include reset-text();
      margin-top: 10px;
      padding-right: 8px;
      padding-top: 60px;
      font-size: 16px;
			width: 27%;
      border-right: 1px solid $grey;
      text-align: center;
    }
    &__investments {
      color: $red;
      font-size: 16px;
      font-weight: bold;
      text-align: left;
    }
	}
</style>
