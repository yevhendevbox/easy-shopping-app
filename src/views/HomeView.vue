<template>
  <main class="flex-grow-1">
    <div class="container py-16 d-flex flex-wrap justify-center flex-gap-2">
      <base-product-card v-for="product in productsList"
        :key="product.id"
        :product="product" />
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import BaseProductCard from '../components/BaseProductCard.vue';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../stores/productsStore';

const store = useProductsStore();
const { productsList } = storeToRefs(store);

onMounted(() => {
  store.getProductList();
});
</script>
<style scoped></style>