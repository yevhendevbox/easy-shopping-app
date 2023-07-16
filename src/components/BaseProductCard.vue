<template>
  <v-card max-width="344">
    <v-img :src="props.product.image"
      lazy
      height="200px"
      cover></v-img>

    <v-card-title>
      {{ props.product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ props.product.price + ' $' }}
    </v-card-subtitle>

    <v-card-text class="card-max-h">
      {{ props.product.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="grey-darken-4"
        variant="text"
        @click="goToProduct(props.product.id)">
        Details
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="text-none"
        color="amber-lighten-1"
        prepend-icon="mdi-cart-plus"
        variant="flat"
        @click="store.addProductToAnOrder(props.product)">
        add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { isProductValid } from '@/validators.js';
import { useRouter } from 'vue-router';
import { useProductListStore } from '../stores/productListStore';

const store = useProductListStore();
const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: isProductValid
  }
});
const router = useRouter();

const goToProduct = (id) => {
  router.push({ name: 'product', params: { id } });
}

</script>

<style scoped></style>