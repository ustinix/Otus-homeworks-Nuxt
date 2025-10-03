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
      <div class="toolbar-left">
        <div class="toolbar-title">
          <NuxtLink to="/" class="main-link">
            <h2 class="title">The shop</h2>
          </NuxtLink>
        </div>
      </div>

      <div class="toolbar-center">
        <NavMenu />
      </div>

      <div class="toolbar-right">
        <div class="search-section">
          <HeaderSearch
            :products="props.products"
            @update:filtered="handleSearchUpdate"
          />
        </div>
      </div>

      <div class="mobile-menu-btn">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="mobile-menu-icon"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--bg-color-dark);
  color: var(--text-color-light);
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 3rem;
  gap: 1rem;
}

.toolbar-left,
.toolbar-center,
.toolbar-right {
  display: flex;
  align-items: center;
}

.toolbar-title h2 {
  margin: 0;
  color: var(--text-color-light);
  font-size: 1.5rem;
  white-space: nowrap;
}

.main-link {
  text-decoration: none;
}

.search-section {
  max-width: 400px;
  width: 100%;
}

.icon-link {
  color: var(--text-color-light);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.icon-link:hover {
  background-color: rgba(255,255,255,0.1);
}

.mobile-menu-btn {
  display: none;
}

.mobile-menu-icon {
  color: white;
  font-size: 1.5rem;
}
@media (max-width: 1024px) {
  .toolbar {
    padding: 0 0.5rem;
    gap: 0.5rem;
  }

  .toolbar-title h2 {
    font-size: 1.3rem;
  }

  .search-section {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0.75rem;
  }

  .toolbar {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .toolbar-left {
    flex: 1;
  }

  .toolbar-center {
    order: 3;
    flex-basis: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .toolbar-right {
    flex: 1;
    justify-content: flex-end;
  }

  .search-section {
    max-width: 250px;
  }

  .toolbar-title h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 640px) {
  .header {
    padding: 0.5rem;
  }

  .toolbar {
    padding: 0;
    gap: 0.5rem;
  }

  .toolbar-center {
    order: 3;
    flex-basis: 100%;
  }

  .toolbar-right {
    flex: 0 1 auto;
  }

  .search-section {
    max-width: 200px;
  }

  .toolbar-title h2 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .toolbar {
    flex-wrap: nowrap;
  }

  .toolbar-center {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
  }

  .search-section {
    max-width: 180px;
  }

  .toolbar-title h2 {
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .toolbar {
    gap: 0.25rem;
  }

  .search-section {
    max-width: 150px;
  }

  .toolbar-title h2 {
    font-size: 0.9rem;
  }
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

:deep(.nav-menu) {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 768px) {
  :deep(.nav-menu) {
    gap: 0.5rem;
  }
}
</style>