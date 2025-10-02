<template>
  <div class="error-container">
    <q-banner class="bg-negative text-white">
      <template v-slot:avatar>
        <q-icon name="error" color="white" />
      </template>

      Ошибка загрузки: {{ error.message }}

      <template v-slot:action>
        <q-btn
          flat
          color="white"
          label="Повторить"
          @click="event"
        />
      </template>
    </q-banner>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: Error;
  event: () => void;
}>();
</script>

<style scoped>
.error-container {
  margin: auto 0;
}
</style>
