<template>
  <div class="post-item">
    <h2>{{ post.title }}</h2>
    <div class="buttons">
      <button @click="editPost">Изменить</button>
      <button @click="removePost">Удалить</button>
      <button @click="toggleComments">Комментарии</button>
    </div>

    <Modal v-if="isEditMode" @close="isEditMode = false" @save="saveEdit">
      <textarea v-model="editedTitle" />
      <div class="modal-buttons">
        <button @click="isEditMode = false">Закрыть</button>
        <button @click="saveEdit">Сохранить</button>
      </div>
    </Modal>

    <CommentList v-if="showComments" :comments="post.comments" :postId="post.id" />
    <CommentForm v-if="showComments" :postId="post.id" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePostStore } from '@/stores/postStore'
import Modal from './Modal.vue'
import CommentList from './CommentList.vue'
import CommentForm from './CommentForm.vue'

const props = defineProps({ post: Object })
const postStore = usePostStore()
const showComments = ref(false)
const isEditMode = ref(false)
const editedTitle = ref(props.post.title)

const editPost = () => { isEditMode.value = true }

const saveEdit = () => {
  postStore.updatePost(props.post.id, editedTitle.value)
  isEditMode.value = false
}

const removePost = () => { 
  console.log(`Попытка удалить пост с ID: ${props.post.id}`);
  postStore.removePost(props.post.id) 
}

const toggleComments = () => { showComments.value = !showComments.value }
</script>

<style scoped>
.post-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s;
}

.post-item:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.buttons {
  margin-top: 10px;
}

.buttons button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  transition: background-color 0.3s;
}

.buttons button:hover {
  background-color: #45a049;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
