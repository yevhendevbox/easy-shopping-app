import { defineStore } from 'pinia';
import { getProductsQuery } from '../core/api';
import { BASE_QUANTITY } from '../constants';

export const useProductListStore = defineStore('productList', {
  state: () => ({
    productsList: [],
    currentOrderList: [],
  }),
  getters: {
    getOrderQuantity() {
      if (!this.currentOrderList) {
        return '0';
      }
      const quantity = this.currentOrderList.reduce((quantity, product) => quantity + product.quantity, 0);
      return quantity;
    },
    getOrderTotalPrice() {
      if (!this.currentOrderList) {
        return '0.00';
      }
      const total = this.currentOrderList.reduce((total, product) => total + (product.price * product.quantity), 0);
      return total;
    }
  },
  actions: {
    async setProductList() {
      this.productsList = await getProductsQuery();
    },
    addProductToAnOrder(productToAdd) {
      const existingProduct = this.currentOrderList.find((product) => product.id === productToAdd.id);
      if (existingProduct) {
        existingProduct.quantity++;
        return;
      }
      this.currentOrderList.push({ quantity: BASE_QUANTITY, ...productToAdd });
    },
    deleteItemFromOrderList(idToDelete) {
      this.currentOrderList = this.currentOrderList.filter((product) => product.id !== idToDelete);
    },
    addProductQuantity(idToAdd) {
      const productToUpdate = this.currentOrderList.find((product) => product.id === idToAdd);
      productToUpdate.quantity++;
    },
    reduceProductQuantity(idToAdd) {
      const productToUpdate = this.currentOrderList.find((product) => product.id === idToAdd);
      if (productToUpdate.quantity === 1) return;

      productToUpdate.quantity--;
    }
  },
});
