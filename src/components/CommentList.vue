<template>
  <div class="comment-list">
    <div v-for="comment in comments" :key="comment.id" class="comment-item">
      <p>{{ comment.text }}</p>
      <button @click="removeComment(comment.id)">Удалить комментарий</button>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/postStore'

const props = defineProps({ comments: Array, postId: Number })
const postStore = usePostStore()

const removeComment = (commentId) => {
  postStore.removeComment(props.postId, commentId)
}
</script>

<style scoped>
.comment-list {
  margin-top: 10px;
}

.comment-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f1f1f1;
}

.comment-item button {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.comment-item button:hover {
  background-color: #c9302c;
}
</style>
