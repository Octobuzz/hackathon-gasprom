<template>
	<div class="auth-page">
		<form
			class="auth-page__form"
			@submit="auth"
		>
			<h1>Авторизация</h1>
			<div class="auth-page__form__fields">
				<label class="auth-page__form__field">
					Логин
					<input
						v-model="authData.identifier"
						class="auth-page__input"
						type="text"
					/>
				</label>
				<label class="auth-page__form__field">
					Пароль
					<input
						v-model="authData.password"
						class="auth-page__input"
						type="text"
					/>
				</label>
			</div>
			<button
				class="auth-page__form__enter-button"
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
	  		this.$router.push('/dashboard');
	  	});
	  }
	}
</script>

<style scoped lang="scss">
.auth-page {
	display: flex;
	flex-direction: column;

	&__input {
		margin-left: 8px;
	}

	&__form {
		display: flex;
		flex-direction: column;
		margin: auto;

		&__fields {
			display: flex;
			flex-direction: column;
		}

		&__field {
			margin-bottom: 15px;
		}

		&__enter-button {
			margin-top: 10px;
		}
	}
}
</style>
