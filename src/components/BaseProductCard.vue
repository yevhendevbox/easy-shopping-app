<template>
  <v-card max-width="344">
    <v-img :src="props.product.image"
      lazy
      height="200px"
      cover></v-img>

    <v-card-title>
      {{ props.product.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ props.product.price + ' $' }}
    </v-card-subtitle>

    <v-card-text>
      {{ props.product.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="purple-lighten-2"
        variant="text"
        @click="goToProduct(props.product.id)">
        Details
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-cart-plus"
        color="green"
        variant="flat"
        size="small"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { isProductValid } from '@/validators.js';
import { useRouter } from 'vue-router';
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