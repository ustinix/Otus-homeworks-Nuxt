<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Product } from '~/types/product';

const props = defineProps<{
  products: Product[];
}>();

const emit = defineEmits<{
  (e: 'update:filtered', value: Product[]): void;
}>();

const searchQuery = ref('');

const filteredProducts = computed(() => {
  if (!searchQuery.value) return props.products;

  const query = searchQuery.value.toLowerCase();
  return props.products.filter(
    product =>
      product.title?.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.price.toString().includes(query)
  );
});

watch(filteredProducts, newVal => {
  emit('update:filtered', newVal);
});

const clearSearch = () => {
  searchQuery.value = '';
};
</script>

<template>
  <div class="search-container">
    <q-input
      v-model="searchQuery"
      placeholder="Search by product name..."
      outlined
      dense
      dark
      class="search-field"
      clearable
      @clear="clearSearch"
    >
      <template #prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<style scoped>
.search-container {
  max-width: 310px;
  min-width: 310px;
  display: flex;
  align-items: center;
}

.search-field {
  width: 100%;
}

</style>
