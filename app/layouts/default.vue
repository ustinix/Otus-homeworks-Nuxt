<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'

const productsStore = useProductsStore()


onMounted(() => {
  productsStore.fetchProducts()
})

</script>
<template>
  <div class="layout">
    <AppHeader
      :products="productsStore.products"
    />

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