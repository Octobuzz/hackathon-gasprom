<template>
	<transition name="modal">
		<div class="idea-page">
			<div class="idea-page__modal">
				<button @click="$emit('close')">
					Закрыть
				</button>
				<h2>Страница Идей</h2>
				<div>
					<p>{{ idea.idea_name }}</p>
					<p v-if="idea.department">
						{{ idea.department.department_name }}
					</p>
					<p>{{ idea.text }}</p>
					<p v-if="idea.lifecycle_stage">
						Статус: {{ idea.lifecycle_stage }}
					</p>
					<p v-if="idea.ready_users">
						Присоединилось к исполнению: {{ idea.ready_users.length }}
					</p>
					<p>Тэг: {{ idea.tag }}</p>
					<p>Инвестировано Твинков: {{ idea.twinkies }}</p>
					<join :idea="idea"></join>
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
		</div>
	</transition>
</template>

<script>
import { Vue, Component, Prop} from 'vue-property-decorator';
import ideas from '../api/Ideas';
import Ckeditor from '@ckeditor/ckeditor5-build-classic';
import comment from '../api/Comment.js';
import ToParticipateInIdea from "./ToParticipateInIdea.vue";

  @Component({
  	components: {
		  'join': ToParticipateInIdea,
  	}
  })
export default class IdeaPage extends Vue {
    @Prop(Number) id
    editor = Ckeditor;
    idea = {};
    comment = '';
    comments = [];

    mounted() {
    	this.loadIdea(this.id);
    	this.loadComments();
    }

    loadIdea(id) {
    	ideas.getIdea(id).then((response) => {
    		this.idea =	response.data;
    	});
    }

    loadComments() {
    	comment.getComments().then((response) => {
    		this.comments = response.data.filter((el) => {
    			return el.idea_card.id === parseInt(this.id);
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

	.idea-page {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: opacity 0.3s ease;

		&__modal {
			width: 80%;
			height: 90%;
			background-color: #ffffff;
			padding: 25px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
			border-radius: 5px;
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

</style>
