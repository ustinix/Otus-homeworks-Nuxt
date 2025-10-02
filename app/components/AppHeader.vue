<script setup lang="ts">
import HeaderSearch from './HeaderSearch.vue';
import type { Product } from '~/types/product';
import NavMenu from './NavMenu.vue';

const props = defineProps<{
  products: Product[];
}>();

const emit = defineEmits<{
  (e: 'search-update', products: Product[]): void;
}>();

const handleSearchUpdate = (filteredProducts: Product[]) => {
  emit('search-update', filteredProducts);
};
</script>

<template>
  <header class="header">
    <div class="toolbar">
      <div class="toolbar-title">
        <NuxtLink to="/" class="main-link">
          <h2>The shop</h2>
        </NuxtLink>
      </div>
      <NavMenu />

      <div class="search-section">
        <HeaderSearch
          :products="props.products"
          @update:filtered="handleSearchUpdate"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--bg-color-dark);
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  margin: 0 auto;
}

.toolbar-title h2 {
  margin: 0;
  color: white;
}

.main-link {
  text-decoration: none;
}

.search-section {
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;
}

.icon-link {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.icon-link:hover {
  background-color: rgba(255,255,255,0.1);
}
</style>