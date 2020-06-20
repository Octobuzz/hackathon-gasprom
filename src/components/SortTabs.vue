<template>
<div class="sort">
  <ul class="sort__list">
    <li class="sort__item sort__item--active">Внутренние сервисы</li>
    <li class="sort__item">Встреча</li>
    <li class="sort__item">Офис</li>
    <li class="sort__item">Оптимизация платформы</li>
    <li class="sort__item">Другое</li>
  </ul>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({

})
export default class SortTabs {

}
</script>

<style scoped lang="scss">
.sort {
  max-width: 650px;
  padding: 15px;
  margin: 0 auto 15px auto;
  background-color: $white;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
  -moz-box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
  box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
  &__list {
    @include reset-list();
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    position: relative;
    &:hover,
    &:focus {
      cursor: pointer;
    }
    &--active {
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: $azure;
      }
    }
  }
}
</style>
