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
import { useProductListStore } from '../stores/productListStore';

const store = useProductListStore();
const { productsList } = storeToRefs(store);

onMounted(() => {
  store.setProductList();
});
</script>
<style scoped></style>