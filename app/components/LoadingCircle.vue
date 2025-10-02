<script setup lang="ts">
</script>
<template>
  <div class="loading-container">
    <q-spinner size="64px" color="primary" />
    <div class="q-mt-md">Загрузка...</div>
  </div>
</template>
<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 200px;
}
</style>
