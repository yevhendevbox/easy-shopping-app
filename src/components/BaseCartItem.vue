<template>
  <li class="mb-6">
    <div class="d-flex flex-column flex-sm-row mx-sm-auto flex-gap-2 align-center">
      <div class="d-flex align-center flex-gap-2">
        <v-btn density="compact"
          color="red"
          icon="mdi-trash-can"
          @click="store.deleteItemFromOrderList(props.product.id)"></v-btn>
        <img :src="props.product.image"
          class="order-item-image"
          :alt="props.product.title">
      </div>
      <div class="flex-1-1">
        <router-link class="text-h6"
          :to="`/product/${props.product.id}`">{{ props.product.title }}</router-link>
        <h5 class="text-h5">{{ props.product.price + ' $' }}</h5>
      </div>
      <div class="d-flex flex-column align-center flex-gap-1">
        <div class="d-flex align-center flex-gap-1">
          <v-btn icon="mdi-minus"
            size="x-small"
            :disabled="props.product.quantity === 1"
            @click="store.reduceProductQuantity(props.product.id)"></v-btn>
          <span>{{ props.product.quantity }}</span>
          <v-btn icon="mdi-plus"
            size="x-small"
            @click="store.addProductQuantity(props.product.id)"></v-btn>
        </div>
        <span>total: {{ countProductTotalPrice(props.product.price, props.product.quantity) }}$</span>
      </div>
    </div>
    <v-divider class="mt-4"></v-divider>
  </li>
</template>

<script setup>
import { isProductValid } from '../validators';
import { countProductTotalPrice } from '../functions';
import { useProductListStore } from '../stores/productListStore';

const store = useProductListStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: isProductValid
  }
});
</script>

<style scoped></style>