<template>
  <div id="app">
    <h1>Дневник</h1>
    <PostList />
  </div>
</template>

<script setup>
import PostList from './components/PostList.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
</style>
