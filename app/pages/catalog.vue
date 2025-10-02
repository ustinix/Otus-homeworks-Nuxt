<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import ProductFilter from '~/components/ProductFilter.vue'
import { ref, computed } from 'vue'

const productsStore = useProductsStore()

const selectedCategory = ref<string | null>(null)

const categories = computed(() => {
  const uniqueCategories = new Set(productsStore.products.map(p => p.category))
  return Array.from(uniqueCategories).sort()
})

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return productsStore.displayedProducts

  return productsStore.displayedProducts.filter(
    product => product.category === selectedCategory.value
  )
})
</script>

<template>
  <div class="page">
    <h1 class="page-title">Catalog</h1>
     <ProductFilter
        v-model:selected-category="selectedCategory"
        :categories="categories"
    />
    <div v-if="productsStore.isLoading" class="loading">
      Loading...
    </div>
    <div v-else class="products-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-if="!productsStore.isLoading && productsStore.displayedProducts.length === 0" class="empty">
      Products not found
    </div>
  </div>
</template>