<script setup lang="ts">
import DividerLine from '~/components/DividerLine.vue';
import LoadingCircle from '~/components/LoadingCircle.vue';
import ErrorTemplate from '~/components/ErrorTemplate.vue';

const isLoading = ref(false);
const error = ref(null);

const reloadCart = async () => {
  console.log('перезагрузка корзины')
};

</script>
<template>
    <div class="cart-container">
    <loading-circle v-if="isLoading" />
    <error-template v-else-if="error" :error="error" :event="reloadCart" />
        <template v-else>
            <h2>Cart</h2>
        </template>
   </div>
</template>

<style scoped>

</style>