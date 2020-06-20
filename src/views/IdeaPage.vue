<template>
	<div>
		<h2>Страница Идей</h2>
		<div>
			<p>{{ idea.idea_name }}</p>
			<p v-if="idea.department">{{ idea.department.department_name }}</p>
			<p>{{ idea.text }}</p>
			<p v-if="idea.lifecycle_stage">Статус: {{ idea.lifecycle_stage }}</p>
			<p v-if="idea.ready_users">Присоединилось к исполнению: {{ idea.ready_users.length }}</p>
			<p>Тэг: {{ idea.tag }}</p>
			<p>Инвестировано Твинков: {{ idea.twinkies }}</p>
		</div>
		<div>
			<h2>Раздел Комментариев</h2>
			<div style="height: 200px">
				<ckeditor
					v-model="comment"
					:editor="editor"
				/>
				<button
					:disabled="!comment"
					@click="addComment"
				>
					Добавить комментарий
				</button>
				<div>
					<div v-for="comment in comments">
						<p v-html="comment.text" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import ideas from '../api/Ideas';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';
import comment from '../api/Comment.js';

@Component()
export default class IdeaPage extends Vue {
  editor = Ckeditor;
  idea = {};
  comment = '';
	comments = [];

	mounted() {
  	this.loadIdea(this.$router.currentRoute.params.id);
  	this.loadComments();
	}

	loadIdea(id) {
  	ideas.getIdea(id).then((response) => {
  	  console.log(response.data);
  		this.idea =	response.data;
  	});
	}

	loadComments() {
		comment.getComments().then((response) => {
		  this.comments = response.data.filter((el) => {
		    return el.idea_card.id === parseInt(this.$router.currentRoute.params.id);
		  });

		}).catch((e) => console.log(e));
	}

	addComment() {
  	comment.postComment({
  		text: this.comment,
  		user: {},
  		idea_card: this.idea
  	}).then(() => {
  	  this.comment = '';
			this.loadComments();
		}).catch((e) => {
			this.comment = '';
		  console.log(e);
		});
	}
}
</script>

<style lang="scss">
	.ck-editor__editable_inline {
		height: 200px;
	}
</style>
