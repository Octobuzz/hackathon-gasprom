<template>
  <div class="add-twinks">
    <button
      @click="twinks"
      class="add-twinks__button">
      АХУЕННАЯ ИДЕЯ
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
          })
          User.setInvestments({amount: 10, user: this.user, idea_card: this.idea});
        })
        .catch(() => {
          console.log('fuck')
        })
      }
    }

    get user() {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
</script>

<style lang="scss" scoped>

</style>
