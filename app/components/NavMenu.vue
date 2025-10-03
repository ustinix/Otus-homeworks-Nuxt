<script setup lang="ts">
import type { NavLink } from '~/types/navlink'

const navLinks: NavLink[] = [
    {to: '/', text: 'Home', icon: 'home' },
    {to: '/catalog', text: 'Catalog', icon: 'dashboard'},
    {to: '/cart', text: 'Cart', icon: 'shopping_cart'},
];
</script>
<template>
    <div class="nav-container">
        <NuxtLink v-for="navLink in navLinks" :key="navLink.text" :to="navLink.to" :title="navLink.text" class="nav-link">
            <q-icon :name="navLink.icon" class="nav-icon" />
            <span class="nav-text">{{ navLink.text }}</span>
        </NuxtLink>
    </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  gap: 16px;
  padding: 16px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  text-decoration: none;
  color: var(--text-color-light);
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--link-hover);
  border-color: var(--link-hover);
}

.nav-link.router-link-active {
  color: var(--link-active);
  border-color: var(--link-active);
  font-weight: 500;
}

.nav-icon {
  font-size: 20px;
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
}

</style>