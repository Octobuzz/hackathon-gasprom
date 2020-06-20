<template>
	<div class="creation-page">
		<page-header />
		<form
			class="creation-page__form"
			@submit="createIssue"
		>
			<p v-for="error in errors">
				- {{ error }}
			</p>
			<label class="creation-page__label">
				Заголовок:
				<input
					v-model="newIdea.idea_name"
					class="creation-page__input creation-page__input--headline"
					type="text"
				/>
			</label>
			<ckeditor
				v-model="newIdea.text"
				:editor="editor"
			/>
			<label class="creation-page__label">
				Тэг идеи:
				<select
					v-model="newIdea.tag"
					class="creation-page__input"
				>
					<option v-for="tag in ideaTags">{{ tag }}</option>
				</select>
			</label>
			<button
				class="creation-page__button"
				type="submit"
			>
				Отправить идею
			</button>
		</form>
	</div>
</template>

<script>
import {Vue, Component } from 'vue-property-decorator';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';
import Ideas from '../api/Ideas.js';
import Header from '../components/Header.vue';
import {mapState} from 'vuex';
import user from "../api/User";

	@Component({
		components : {
			'page-header': Header,
		}
	})
export default class Create extends Vue {
	  ideaTags = ["Выберите вариант", "Внутренние сервисы", "Встреча", "Офис", "Оптимизация платформы", "Другое"]
    editor = Ckeditor;
    newIdea = {
    	create_user: JSON.parse(localStorage.getItem('user')),
    	idea_name: "",
    	text: "",
    	tag:"",
    }
		errors = [];

		createIssue() {
			this.errors = [];
			if (!this.newIdea.idea_name) {
				this.errors.push("Введите заголовок");

				return;
			}
			if (!this.newIdea.text) {
				this.errors.push("Введите идею");

				return;
			}
			if (!this.newIdea.tag) {
				this.errors.push("Укажите тэг");

				return;
			}

			Ideas.postIdea(this.newIdea).then(() => {
				this.$router.push('/dashboard');
			}).catch(() => {
				  this.errors = [];
				  this.errors.push("Возникла ошибка подключения, попробуйте позже");
			});

		}
	}
</script>

<style lang="scss">
	.creation-page {
		display: flex;
		flex-direction: column;
    padding-top: 60px;
    background-color: $grey;
		&__form {
      width: 90%;
      padding: 25px;
      margin: 30px auto 0;
      display: flex;
			flex-direction: column;
      background-color: $white;
      border-radius: 5px;
      -webkit-box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
      -moz-box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
      box-shadow: 0px 2px 22px -10px rgba(153,153,153,0.3);
		}
    &__label {
      font-weight: bold;
      text-align: left;
      margin-bottom: 25px;
    }
    &__input {
      padding: 10px;
      margin-left: 10px;
      border: 1px solid $night;
      outline: none;
      &--headline {
        width: 800px;
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
      padding: 10px 15px;
      font-weight: bold;
      color: $white;
      background-color: $azure;
      &:hover,
      &:focus {
        background-color: $button-hover;
      }
      &:active {
        background-color: $button-violet;
      }
    }
	}
	.ck-editor__editable_inline {
		margin-bottom: 25px;
	}
</style>
