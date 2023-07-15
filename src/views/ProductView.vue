<template>
  <main class="flex-grow-1">
    <div class="container pt-16 d-flex flex-wrap flex-gap-2">
      {{ 'i am from product ' + route.params.id }}
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped></style>