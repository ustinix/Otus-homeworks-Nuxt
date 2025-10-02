<script setup lang="ts">
</script>

<template>
  <div class="errorPage-container">
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you are looking for doesn't exist. You can go back to homepage.</p>
    <div class="button-container">
      <NuxtLink to="/" class="button">Home page</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.errorPage-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.button-container {
  display: flex;
  justify-content: center;
}

</style>