<template>
	<div class="creation-page">
		<form
			class="creation-page__form"
			@submit="createIssue"
		>
			<h1>Страница создания идеи</h1>
			<p v-for="error in errors">
				- {{ error }}
			</p>
			<label>
				Название идеи
				<input
					v-model="newIdea.idea_name"
					type="text"
				/>
			</label>
			<ckeditor
				v-model="newIdea.text"
				:editor="editor"
			/>
			<label>
				Выберите тип идеи
				<select v-model="newIdea.tag">
					<option v-for="tag in ideaTags">{{ tag }}</option>
				</select>
			</label>
			<button type="submit">
				Отправить идею
			</button>
		</form>
	</div>
</template>

<script>
import {Vue, Component } from 'vue-property-decorator';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';
import Ideas from '../api/Ideas.js';

	@Component()
export default class Create extends Vue {
	  ideaTags = ["Выберите вариант", "Внутренние сервисы", "Встреча", "Офис", "Оптимизация платформы", "Другое"]
    editor = Ckeditor;
    newIdea = {
    	idea_name: "",
    	text: "",
    	tag:"",
    }
		errors = [];

    mounted() {
      this.editor.editing.view.change( writer => {
        writer.setStyle( 'height', '200px', editor.editing.view.document.getRoot() );
      } );
		}

		createIssue() {
			this.errors = [];
			if (!this.newIdea.idea_name) {
				this.errors.push("Введите название идеи");
			}
			if (!this.newIdea.text) {
				this.errors.push("Введите Идею");
			}
			if (!this.newIdea.tag) {
				this.errors.push("Укажите тэг");
			} else {
				Ideas.postIdea(this.newIdea).then(() => {
					this.$router.push('/dashboard');
				}).catch(() => {
				  this.errors = [];
				  this.errors.push("Возникла ошибка подключения, попробуйте позже");
				});
			}
		}
	}
</script>

<style lang="scss">
	.creation-page {
		display: flex;
		flex-direction: column;
		&__form {
			display: flex;
			flex-direction: column;
		}
	}
	.ck-editor__editable_inline {
		height: 500px;
	}
</style>
