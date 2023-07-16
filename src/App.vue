<template>
  <the-header />
  <RouterView />
  <base-toast v-if="isToastActive" />
  <the-footer />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue'
import BaseToast from './components/BaseToast.vue';
import { storeToRefs } from 'pinia';
import { useProductListStore } from './stores/productListStore';

const store = useProductListStore();
const { isToastActive } = storeToRefs(store);
</script>

<style scoped></style>
