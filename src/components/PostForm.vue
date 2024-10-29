<template>
  <form @submit.prevent="submitPost" class="post-form">
    <input v-model="title" placeholder="Добавить пост" />
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { usePostStore } from '@/stores/postStore'

const postStore = usePostStore()
const title = ref('')

const submitPost = () => {
  postStore.addPost(title.value)
  title.value = ''
}
</script>

<style scoped>
.post-form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.post-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.post-form button {
  padding: 10px 15px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.post-form button:hover {
  background-color: #0056b3;
}
</style>
