<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'

</script>
<template>
  <div class="layout">
    <AppHeader />

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>