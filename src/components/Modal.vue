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
					<span class="visually-hidden">Закрыть</span>
				</button>
				<h2 class="idea-page__headline">
					Идея
				</h2>
				<div class="idea-page__idea">
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
					<p
						v-if="idea.lifecycle_stage"
						class="idea-page__status"
					>
						<b>Статус:</b> {{ idea.lifecycle_stage }}
					</p>
					<div class="idea-page__add-wrapper">
						<p
							v-if="idea.ready_users"
							class="idea-page__add"
						>
							<b>Присоединилось к исполнению:</b> {{ idea.ready_users.length }}
						</p>
						<p class="idea-page__add">
							<b>Тэг:</b> {{ idea.tag }}
						</p>
						<p class="idea-page__add">
							<b>Инвестировано твинков:</b> {{ idea.twinkies }}
						</p>
					</div>
					<join
						:idea="idea"
					/>
				</div>
				<div>
					<h2 class="idea-page__headline">
						Комментарии
					</h2>
					<div style="height: 200px">
						<div class="idea-page__comment-wrapper">
							<div
								v-for="comment in comments"
								class="idea-page__comments"
							>
								<p
									class="idea-page__comment"
									v-html="comment.text"
								/>
							</div>
						</div>
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
		z-index: 9999;
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
			height: auto;
			background-color: #ffffff;
			padding: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
			border-radius: 5px;
			overflow: scroll;
			z-index: 9999;
      position: relative;
			&::-webkit-scrollbar {
				display: none;
			}
		}
    &__close-button {
      @include reset-button();
      width: 25px;
      height: 25px;
      position: absolute;
      right: 20px;
      background-image: url("../assets/svg/close.svg");
      background-color: transparent;
      &:hover,
      &:focus {
        opacity: 0.7;
      }
      &:active {
        opacity: 0.5;
      }
    }
    &__headline {
      @include reset-text();
      width: 90%;
      margin-bottom: 15px;
      border-bottom: 2px solid $grey;
      text-align: left;
    }
    &__idea {
      padding-left: 15px;
      margin-bottom: 30px;
    }
    &__title {
      padding-bottom: 5px;
      font-size: 18px;
      text-align: left;
      font-weight: bold;
    }
    &__text {
      text-align: left;
      margin-bottom: 35px;
    }
    &__add-wrapper {
      margin-bottom: 25px;
      padding: 10px 20px;
      border: 2px solid $violet;
      text-align: left;
      border-radius: 15px;
    }
    &__department,
    &__status {
      text-align: left;
      text-decoration: underline;
    }
    &__add {
      @include reset-text();
      margin-bottom: 15px;
      &:last-of-type {
        margin: 0;
      }
    }
    &__button {
      @include reset-button();
      width: 265px;
      margin-bottom: 25px;
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
    &__comment-wrapper {

    }
    &__comments {

    }
    &__comment {
      @include reset-text();
      text-align: left;
      padding: 5px 5px 5px 60px;
      border-bottom: 2px solid $grey;
      position: relative;
      &::after {
        content: url("../assets/svg/young.svg");
        width: 50px;
        height: 50px;
        position: absolute;
        top: 3px;
        left: -10px;
        border: 5px solid $violet;
        text-align: center;
        border-radius: 50px;
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
