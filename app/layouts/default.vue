<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'

const productsStore = useProductsStore()


onMounted(() => {
  productsStore.fetchProducts()
})

const handleSearchUpdate = (filteredProducts: Product[]) => {
  productsStore.updateDisplayedProducts(filteredProducts)
}
</script>
<template>
  <div class="layout">
    <AppHeader
      :products="productsStore.products"
      @search-update="handleSearchUpdate"
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