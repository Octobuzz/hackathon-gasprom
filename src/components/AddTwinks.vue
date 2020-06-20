<template>
	<div class="add-twinks">
		<button
			class="add-twinks__button"
			@click="twinks"
		>
			Вложить 10
		</button>
	</div>
</template>

<script>
import {Component, Vue, Prop} from 'vue-property-decorator';
import ideas from "../api/Ideas.js";
import User from "../api/User.js";
  @Component({

  })
export default class AddTwinks extends Vue {
    @Prop(Object) idea;
    created() {
    }

    twinks() {
    	if (this.user.twinkies > 0) {
    		ideas.updateIdea(this.idea.id, {twinkies: Number(this.idea.twinkies) + 10}).then(() => {
    			this.$store.commit('updateIdeaCard', {
    				id: this.idea.id,
    				path: 'twinkies',
    				data: Number(this.idea.twinkies) + 10
    			});
    			this.user.twinkies -= 10;
    			User.updateUserData(this.user.id, {twinkies: this.user.twinkies}).then(() => {
    				this.$store.commit('updateUser', {path: 'twinkies', data: this.user.twinkies - 10} );
    			});
    			User.setInvestments({amount: 10, user: this.user, idea_card: this.idea});
    		})
    			.catch(() => {
    				console.log('fuck');
    			});
    	}
    }

    get user() {
    	return JSON.parse(localStorage.getItem('user'));
    }
  }
</script>

<style scoped lang="scss">
.add-twinks {
  &__button {
    @include reset-button();
    padding: 15px 10px 15px 15px;
    background-color: $button-violet;
    border-radius: 5px;
    color: $white;
    font-weight: bold;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus {
      background-color: $button-hover;
    }
    &:active {
      background-color: $button-violet;
    }
    &::after {
      content: url("../assets/svg/macaron.svg");
      width: 40px;
      height: 30px;
    }
  }
}
</style>
