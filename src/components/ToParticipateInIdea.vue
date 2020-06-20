<template>
  <div class="add-twinks">
    <button
      class="add-twinks__button"
      @click.stop="AcceptIdea"
    >
      Я вписываюсь за эту идею
    </button>
  </div>
</template>

<script>
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import User from "../api/User.js";
  @Component({

  })
  export default class AddTwinks extends Vue {
    @Prop(Object) idea;
    isIdea;
    created() {
    }

    AcceptIdea() {
      this.calcUserIdea(this.idea.id);
      if (this.isIdea) {
          this.user.idea_cards.push(this.idea.id);
          User.updateUserData(this.user.id, {idea_cards: this.user.idea_cards}).then(() => {
            this.$store.commit('updateUser', {path: 'idea_cards', data: this.user.idea_cards} );
          }).catch(() => {
            console.log('fuck');
          };
          User.setInvestments({amount: 10, user: this.user, idea_card: this.idea});
      }
    }

    get user() {
      return JSON.parse(localStorage.getItem('user'));
    }

    calcUserIdea(id) {
     if (this.user.idea_cards.filter(idea => idea !== id).length) {
       this.isIdea = true;
     } else {
       this.isIdea = false;
     }
    }
  }
</script>

<style lang="scss" scoped>

</style>
