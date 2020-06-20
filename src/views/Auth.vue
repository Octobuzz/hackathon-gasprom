<template>
	<div class="auth-page">
		<form
			class="auth-page__form"
			@submit="auth"
		>
			<img
				class="auth-page__logo"
				src="../assets/mainlogo.png"
				alt="GhostBankers"
				width="190"
				height="180"
			/>
			<h1 class="auth-page__headline">
				Авторизация
			</h1>
			<div class="auth-page__fields">
				<label class="auth-page__label">Логин:</label>
				<input
					v-model="authData.identifier"
					class="auth-page__input"
					type="text"
					placeholder="ivanov@gmail.com"
				/>
				<label class="auth-page__label">Пароль:</label>
				<input
					v-model="authData.password"
					class="auth-page__input"
					type="password"
					placeholder="password"
				/>
			</div>
			<button
				class="auth-page__button"
				type="submit"
			>
				Войти
			</button>
		</form>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import login from '../api/Auth.js';

	@Component({})
export default class Auth extends Vue{
	  authData = {
	    identifier: "",
	  	password: "",
	  }

	  auth() {
	  	login.postLogin(this.authData).then((response) => {
	  		localStorage.setItem('token', `${response.data.jwt}`);
	  		this.$store.commit('setUser', response.data.user);
	  		this.$router.push('/dashboard');
	  	});
	  }
	}
</script>

<style scoped lang="scss">
.auth-page {
	display: flex;
	flex-direction: column;
  background-color: $azure;
  background: linear-gradient(to top right, $violet, $azure);

	&__form {
    min-width: 400px;
    box-sizing: border-box;
    padding: 35px 35px 55px;
		display: flex;
		flex-direction: column;
		margin: auto;
    background-color: $white;
    border-radius: 15px;
    -webkit-box-shadow: -1px 2px 10px 0px rgba(38,44,64,0.6);
    -moz-box-shadow: -1px 2px 10px 0px rgba(38,44,64,0.6);
    box-shadow: -1px 2px 10px 0px rgba(38,44,64,0.6);
	}

  &__logo {
    display: block;
    margin: 0 auto 20px;
  }

  &__headline {
    @include reset-text();
    margin-bottom: 30px;
    position: relative;
    &::after {
      content: "";
      width: 65%;
      height: 3px;
      position: absolute;
      background-color: $button-violet;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin-bottom: 5px;
    display: block;
    font-weight: bold;
    text-align: left;
  }

  &__input {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid $night;
    outline: none;
    &:last-of-type {
      margin-bottom: 45px;
    }
    &:hover,
    &:focus {
      border: 1px solid $button-violet;
      box-shadow: inset 0 0 0 1px $button-violet;
      transition: all 0.1s ease;
    }
  }

  &__button {
    @include reset-button();
    padding: 15px;
    background-color: $button-violet;
    border-radius: 5px;
    color: $white;
    font-weight: bold;
    &:hover,
    &:focus {
      background-color: $button-hover;
    }
    &:active {
      background-color: $button-violet;
    }
  }
}
</style>
