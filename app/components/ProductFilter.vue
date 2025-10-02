<script setup lang="ts">
defineProps<{
  selectedCategory: string | null;
  categories: string[];
}>();

const emit = defineEmits<{
  (e: 'update:selected-category', value: string | null): void;
}>();
</script>

<template>
  <div class="filter-container">
    <q-select
      :model-value="selectedCategory"
      :options="categories"
      label="Filter by category"
      clearable
      outlined
      dense
      class="filter-field"
      @update:model-value="emit('update:selected-category', $event)"
    />
  </div>
</template>

<style scoped>
.filter-container {
  max-width: 300px;
  margin-bottom: 20px;
}

.filter-field {
  width: 100%;
}
</style>