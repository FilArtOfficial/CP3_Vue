<template>
  <form @submit.prevent="submitComment" class="comment-form">
    <input v-model="commentText" placeholder="Добавить комментарий" />
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { usePostStore } from '@/stores/postStore'

const props = defineProps({ postId: Number })
const postStore = usePostStore()
const commentText = ref('')

const submitComment = () => {
  postStore.addComment(props.postId, commentText.value)
  commentText.value = ''
}
</script>

<style scoped>
.comment-form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.comment-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.comment-form button {
  padding: 10px 15px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
}

.comment-form button:hover {
  background-color: #218838;
}
</style>
