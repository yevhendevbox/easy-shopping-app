import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getProductsQuery } from '../core/api';

export const useProductsStore = defineStore('products', () => {
  const productsList = ref([]);

  async function getProductList() {
    productsList.value = await getProductsQuery();
  }
  return { productsList, getProductList }
})
