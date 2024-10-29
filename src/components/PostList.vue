<template>
  <div class="post-list">
    <PostForm @addPost="addPost" />
    <div v-for="post in posts" :key="post.id">
      <PostItem :post="post" />
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/postStore'
import PostForm from './PostForm.vue'
import PostItem from './PostItem.vue'
import { toRefs } from 'vue'; // Импортируйте toRefs

const postStore = usePostStore();
const { posts } = toRefs(postStore); // Используйте toRefs для реактивности
const addPost = postStore.addPost;
</script>

<style scoped>
.post-list {
  margin: 20px 0;
}
</style>
