<template>
  <main class="flex-grow-1 pt-16">
    <div class="container-sm py-16 d-flex flex-column flex-md-row flex-gap-4">
      <v-img :width="400"
        aspect-ratio="16/9"
        cover
        :src="singleProduct.image"
        class="flex-grow-1 flex-shrink-0"></v-img>
      <div class="d-flex flex-column flex-gap-2 flex-grow-0 flex-shrink-1">
        <h2 class="text-h2">{{ singleProduct.title }}</h2>
        <h3 class="text-h3">{{ singleProduct.price + '$' }}</h3>
        <div>
          <p class="text-medium-emphasis">
            category: {{ singleProduct.category }} | rating: {{ singleProduct.rating.rate }}/{{ singleProduct.rating.count
            }}</p>
        </div>
        <p>{{ singleProduct.description }}</p>
        <div class="d-flex justify-end">
          <v-btn class="me-2 text-none"
            to="/"
            border
            prepend-icon="mdi-backspace-outline"
            variant="flat">
            Back to products
          </v-btn>
          <v-btn border
            class="text-none"
            color="amber-lighten-1"
            prepend-icon="mdi-cart-plus"
            variant="flat"
            @click="store.addProductToAnOrder(singleProduct)">
            Add to cart
          </v-btn>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProductByIdQuery } from '../core/api';
import { useProductListStore } from '../stores/productListStore';

const { id } = useRoute().params;
const router = useRouter();

const store = useProductListStore();
store.setOrderListFromLocalStorage();
const singleProduct = ref({
  id: null,
  title: "",
  price: null,
  description: "",
  category: "",
  image: "",
  rating: {}
});

onMounted(async () => {
  try {
    singleProduct.value = await getProductByIdQuery(id);
    if (!singleProduct.value) {
      router.push({ name: 'notFound' });
    }
  } catch (error) {
    throw new Error(error);
  }
});
</script>

<style scoped></style>