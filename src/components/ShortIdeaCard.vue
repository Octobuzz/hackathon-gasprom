<template>
  <div>
    <h2>{{ idea.idea_name }}</h2>
    <div>ТВИНКИ:{{ twinkies }}</div>
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

<style scoped>

</style>
