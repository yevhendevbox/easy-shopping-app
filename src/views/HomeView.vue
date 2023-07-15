<template>
  <main class="flex-grow-1">
    <div class="container pt-16 d-flex flex-wrap flex-gap-2">
      <base-product-card v-for="product in productList"
        :key="product.id"
        :product="product" />
    </div>
  </main>
</template>

<script setup>
import BaseProductCard from '../components/BaseProductCard.vue';
const productList = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 455,
    "image": "https://picsum.photos/200/300?random=1",
    "description": "This is a description for Product 1."
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 270,
    "image": "https://picsum.photos/200/300?random=2",
    "description": "This is a description for Product 2."
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 493,
    "image": "https://picsum.photos/200/300?random=3",
    "description": "This is a description for Product 3."
  },
]
</script>
<style scoped></style>