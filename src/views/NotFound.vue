<template>
<div class="not-found">
  <h1 class="not-found__headline">404</h1>
  <h2 class="not-found__text">Упс, что-то пошло не так</h2>
</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';

@Component({})
export default class NotFound extends Vue {
}
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url("../assets/svg/404.svg");
  background-repeat: no-repeat;
  background-position: center;
  color: $night;
  &__headline {
    font-size: 400px;
    line-height: 300px;
    margin-top: 50px;
    margin-bottom: 400px;
  }
  &__text {
    font-size: 100px;
  }
}
</style>
