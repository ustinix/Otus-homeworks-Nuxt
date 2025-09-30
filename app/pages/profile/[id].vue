<script setup lang="ts">
const route = useRoute();
const routeId = route.params.id;
const { data, error, execute} = useAsyncData(() => $fetch(`/api/hello?userId=${routeId}`))
</script>
<template>
    <div>
profile with id - {{ route.params.id }}
<div>{{data}}</div>
<div>{{ error }}</div>
<button @onClick="execute">execute</button>
    </div>
</template>

<style scoped>

</style>