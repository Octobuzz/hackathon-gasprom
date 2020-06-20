<template>
	<div class="header">
		<div class="header__logo">
			<img
				class="header__logo"
				src="../assets/mainlogo.png"
				alt="GhostBankers"
				width="55"
				height="45"
			/>
		</div>
		<ul class="header__menu">
			<li class="header__item">
				<router-link
					class="header__link"
					to="/dashboard"
				>
					Главная
				</router-link>
			</li>
			<li class="header__item">
				<router-link
					class="header__link"
					to="/create-idea"
				>
					Создать идею
				</router-link>
			</li>
			<li class="header__item">
				<router-link
					class="header__link"
					to="/final-fight"
				>
					Битва
				</router-link>
			</li>
		</ul>
		<ul class="header__balance">
			<li class="header__balance-item header__balance-item--twinkie">
				Твинки <span class="header__balance-count">: 1200</span>
			</li>
			<li class="header__balance-item header__balance-item--ghost">
				Призраки <span class="header__balance-count">: 1000</span>
			</li>
		</ul>
		<div class="header__user-wrapper">
			<span class="header__username">Никита</span>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({

})
export default class Header extends Vue{

}
</script>

<style scoped lang="scss">
.header {
  box-sizing: border-box;
  width: 100%;
  min-width: 950px; /**/
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: $azure;
  box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
  color: $white;
  &__logo {
    width: 55px;
    height: 55px;
    margin-right: 15px;
    background-color: $white;
    border-radius: 50px;
  }
  &__menu {
    @include reset-list();
    display: flex;
    margin-right: 15px;
  }
  &__item {
    margin: 0 15px;
    position: relative;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &::after {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $white;
      transition: width .1s ease-in-out;
    }
    &:hover::after,
    &:focus::after{
      width: 100%;
    }
    &:hover,
    &:focus {
      outline: none;
      cursor: pointer;
    }
  }
  &__link {
    color: $white;
    font: inherit;
    text-decoration: none;
  }
  &__balance {
    @include reset-list();
    display: flex;
    align-items: center;
    height: 40px;
  }
  &__balance-item {
    margin: 0 20px;
    position: relative;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &--twinkie {
      &::after {
        content: url("../assets/svg/macarons.svg");
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 58px;
        transform: translateY(-50%);
      }
    }
    &--ghost {
      &::after {
        content: url("../assets/svg/ghosts.svg");
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 78px;
        transform: translateY(-50%);
      }
    }
  }
  &__balance-count {
    box-sizing: border-box;
    width: 170px;
    padding-left: 50px;
    font-weight: bold;
    font-size: 24px;
  }
  &__user-wrapper {
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid $white;
    border-radius: 50px;
    &:hover,
    &:focus {
      cursor: pointer;
    }
  }
  &__username {
    padding-right: 50px;
    position: relative;
    &::after {
      content: url("../assets/svg/superhero.svg");
      width: 40px;
      height: 40px;
      position: absolute;
      right: 0;
      top: -10px;
      background-color: $white;
      border-radius: 50px;
    }
  }
}
</style>
