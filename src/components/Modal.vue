<template>
	<transition name="modal">
		<div class="idea-page">
			<div
				class="overlay"
				@click="$emit('close')"
			/>
			<div class="idea-page__modal">
				<button
					class="idea-page__close-button"
					@click="$emit('close')"
				>
					Закрыть
				</button>
				<h2>Страница Идей</h2>
				<div>
					<p class="idea-page__title">
						{{ idea.idea_name }}
					</p>
					<p
						v-if="idea.department"
						class="idea-page__department"
					>
						{{ idea.department.department_name }}
					</p>
					<p
						class="idea-page__text"
						v-html="idea.text"
					/>
					<p v-if="idea.lifecycle_stage">
						Статус: {{ idea.lifecycle_stage }}
					</p>
					<p
						v-if="idea.ready_users"
						class="idea-page__join"
					>
						Присоединилось к исполнению: {{ idea.ready_users.length }}
					</p>
					<p class="idea-page__tag">
						Тэг: {{ idea.tag }}
					</p>
					<p>Инвестировано Твинков: {{ idea.twinkies }}</p>
					<join
						:idea="idea"
					/>
				</div>
				<div>
					<h2>Раздел Комментариев</h2>
					<div style="height: 200px">
						<ckeditor
							v-model="comment"
							:editor="editor"
						/>
						<button
							class="idea-page__button"
							:disabled="!comment"
							@click="addComment"
						>
							Добавить комментарий
						</button>
						<div class="idea-page__comments">
							<div v-for="comment in comments">
								<p
									class="idea-page__comment"
									v-html="comment.text"
								/>
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
		height: 100px;
	}

	.idea-page {
		position: fixed;
		z-index: 99;
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
			width: 700px;
			height: 70%;
			background-color: #ffffff;
			padding: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
			border-radius: 5px;
			overflow: scroll;
			z-index: 99;
      position: relative;
			&::-webkit-scrollbar {
				display: none;
			}
		}
    &__close-button {
      position: absolute;
    }
    &__button {
      @include reset-button();
      padding: 10px 15px;
      color: $white;
      font-weight: bold;
      background-color: $azure;
      border-radius: 5px;
      &:hover,
      &:focus {
        background-color: $button-hover;
      }
      &:active {
        background-color: $button-violet;
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

	.overlay {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 9998;
	}

</style>
