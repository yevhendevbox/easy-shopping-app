<template>
  <main class="flex-grow-1 py-16">
    <h3 class="text-h3 text-center">Order check list:</h3>
    <div v-if="!currentOrderList.length"
      class="container-sm d-flex justify-center mt-16">
      Theres no any products in the cart yet, feel free to add some!
    </div>

    <div v-else
      class="container-sm d-flex justify-center">
      <ul class="py-10 mx-auto">
        <base-cart-item v-for="product in currentOrderList"
          :key="product.id"
          :product="product" />
        <v-divider class="mt-16"></v-divider>
        <div class="py-8">
          <p class="float-right">Order Total: <span class="text-h5">{{ getOrderTotalPrice }}$</span></p>
        </div>
      </ul>

    </div>

  </main>
</template>

<script setup>
import BaseCartItem from '../components/BaseCartItem.vue';
import { useProductListStore } from '../stores/productListStore';
import { storeToRefs } from 'pinia';

const store = useProductListStore();
const { currentOrderList, getOrderTotalPrice } = storeToRefs(store);

store.setOrderListFromLocalStorage();

</script>

<style scoped></style>