<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import ProductFilter from '~/components/ProductFilter.vue'
import { ref, computed, watch } from 'vue'

const route = useRoute()
const productsStore = useProductsStore()

const searchQuery = computed(() => route.query.search as string || '')
const selectedCategory = ref<string | null>(null)

const categories = computed(() => {
  const uniqueCategories = new Set(productsStore.products.map(p => p.category))
  return Array.from(uniqueCategories).sort()
})

const filteredProducts = computed(() => {
  let filtered = productsStore.products

  if (selectedCategory.value) {
    filtered = filtered.filter(product => product.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product =>
      product.title?.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

</script>

<template>
  <div class="page">
    <div v-if="searchQuery" class="search-info q-mb-md">
      <h3>Search results for: "{{ searchQuery }}"</h3>
      <p>Found {{ filteredProducts.length }} products</p>
    </div>
     <ProductFilter
        v-model:selected-category="selectedCategory"
        :categories="categories"
    />
    <div class="products-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-if="!productsStore.isLoading && filteredProducts.length === 0" class="empty">
      <q-icon name="search_off" size="xl" />
      <p>No products found</p>
      <q-btn
        v-if="searchQuery"
        color="primary"
        label="Clear search"
        @click="navigateTo('/catalog')"
      />
    </div>
  </div>
</template>
<style scoped>
.page {
    max-width: 1700px;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
</style>