<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <div class="modal-actions">
        <button @click="$emit('close')">Закрыть</button>
        <button @click="$emit('save')">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close', 'save'])
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}
</style>
