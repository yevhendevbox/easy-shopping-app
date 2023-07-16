<template>
  <div class="cart-badge bg-amber-lighten-1 text-caption">
    <span>{{ getOrderQuantity ?? 0 }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductListStore } from '../stores/productListStore';

const store = useProductListStore();
const { getOrderQuantity } = storeToRefs(store);

</script>

<style scoped></style>