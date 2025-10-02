<script setup lang="ts">
const route = useRoute();
const productId = route.params.id;
const { data: product, error} = useAsyncData(() => $fetch(`/api/products/${productId}`))
</script>
<template>
    <div>
        <h1 v-if="error">{{ error }}</h1>
        <h1 v-else>Товар {{ $route.params.id }}</h1>
    </div>
</template>

<style scoped>

</style>