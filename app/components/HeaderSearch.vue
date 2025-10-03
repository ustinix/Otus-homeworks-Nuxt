<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');

const handleSearch = () => {
  navigateTo({
    path: '/catalog',
    query: searchQuery.value.trim() ? {
      search: searchQuery.value.trim()
    } : {}
  });
};

const handleInput = () => {
  handleSearch();
};

const handleKeypress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
};

const clearSearch = () => {
  searchQuery.value = '';
  navigateTo('/catalog');
};
</script>

<template>
  <div class="search-container">
    <q-input
      v-model="searchQuery"
      placeholder="Search products..."
      outlined
      dense
      dark
      class="search-field"
      @keypress="handleKeypress"
      @update:model-value="handleInput"
    >

      <template #append>
        <q-btn
          v-if="searchQuery"
          flat
          dense
          round
          icon="close"
          @click="clearSearch"
          class="clear-btn"
        />
        <q-btn
          color="grey-1"
          flat
          dense
          round
          icon="search"
          @click="handleSearch"
        />
      </template>
    </q-input>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
}

.search-field {
  width: 100%;
  max-width: 310px;
  min-width: 310px;
}

@media (max-width: 1024px) {
  .search-field {
    max-width: 280px;
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .search-field {
    max-width: 250px;
    min-width: 250px;
  }
}

@media (max-width: 640px) {
  .search-field {
    max-width: 200px;
    min-width: 200px;
  }
}

@media (max-width: 480px) {
  .search-field {
    max-width: 180px;
    min-width: 180px;
  }
}
</style>
