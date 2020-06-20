<template>
  <div>
    <idea
      v-for="(idea, index) in ideas"
      :idea="idea"
      :key="index"
    />
    <div
      v-infinite-scroll="loadIdeas"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import shortIdeaCard from '../components/ShortIdeaCard.vue';
  import {mapState} from "vuex";
  import Ideas from "../api/Ideas";
  import ideas from "../api/Ideas";
  @Component({
    components: {
      'idea': shortIdeaCard,
    },
    computed: {
      ...mapState({
        ideas: state => state.ideas_cards,
      }),
    }
  })
  export default class TopIdeasDashboard extends Vue {
    posts = 10;
    mounted() {
      this.loadIdeas();
    }

    // get sortTopIdeas() {
    //  return this.ideas.sort((a, b) => {
    //   return Number(a.twinkies) > Number(b.twinkies) ? 1 : -1
    //  });
    // }

    loadIdeas() {
      this.posts+=10;
      Ideas.getIdeas().then((response) => {
        this.$store.commit('setIdeasCard', response.data);
        this.sortTopIdeas(response.data)
      });
    }
  }
</script>
