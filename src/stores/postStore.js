import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostStore = defineStore('postStore', () => {
  const posts = ref([
    {
      id: 1,
      title: "Сегодня было замечательное предложение...",
      comments: [
        { id: 1, text: "Самый яркий комментарий в этом посте" },
        { id: 2, text: "Один из бессмысленных комментариев в этом посте" },
      ],
    },
    {
      id: 2,
      title: "Краткосрочное вымышленное преломление...",
      comments: [{ id: 1, text: "Очень научно и непонятно" }],
    },
  ])

  function addPost(title) {
    posts.value.push({
      id: Date.now(),
      title,
      comments: [],
    })
  }

  function removePost(id) {
    console.log('Удаление поста с id:', id)
    posts.value = posts.value.filter(post => post.id !== id)
  }

  function updatePost(id, newTitle) {
    const post = posts.value.find(post => post.id === id)
    if (post) post.title = newTitle
  }

  function addComment(postId, text) {
    const post = posts.value.find(post => post.id === postId)
    if (post) post.comments.push({ id: Date.now(), text })
  }

  function removeComment(postId, commentId) {
    const post = posts.value.find(post => post.id === postId)
    if (post) {
      post.comments = post.comments.filter(comment => comment.id !== commentId)
    }
  }

  return {
    posts,
    addPost,
    removePost,
    updatePost,
    addComment,
    removeComment,
  }
})
