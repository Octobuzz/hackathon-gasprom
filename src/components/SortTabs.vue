<template>
	<div class="sort">
		<ul class="sort__list">
			<li
				v-for="(sort, index) in sortValues"
				class="sort__item"
				:class="{'sort__item--active': index === currentActive}"
				@click="sortFeed(index)"
			>
				{{ sort }}
			</li>
		</ul>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
})
export default class SortTabs {
  sortValues = ["Внутренние сервисы", "Встреча", "Офис", "Оптимизация платформы", "Другое"]
	currentActive = 0;

	sortFeed(index) {
	  this.currentActive = index;
  	this.$emit('sort', this.sortValues[this.currentActive]);
	}
}
</script>

<style scoped lang="scss">
.sort {
  max-width: 650px;
  padding: 15px;
  margin: 15px auto 35px auto;
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
    margin: 0 5px 0 0;
    position: relative;
    &:last-of-type {
      margin-right: 0;
    }
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
