import { defineStore } from 'pinia';
import { getProductsQuery } from '../core/api';
import { BASE_QUANTITY } from '../constants';

export const useProductListStore = defineStore('productList', {
  state: () => ({
    productsList: [],
    currentOrderList: [],
    isToastActive: false,
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
        this.updateLocalStorage();
        this.toggleToast();
        return;
      }
      this.currentOrderList.push({ quantity: BASE_QUANTITY, ...productToAdd });
      this.updateLocalStorage();
      this.toggleToast();
    },
    deleteItemFromOrderList(idToDelete) {
      this.currentOrderList = this.currentOrderList.filter((product) => product.id !== idToDelete);
      this.updateLocalStorage();
    },
    addProductQuantity(idToAdd) {
      const productToUpdate = this.currentOrderList.find((product) => product.id === idToAdd);
      productToUpdate.quantity++;
      this.updateLocalStorage();
    },
    reduceProductQuantity(idToAdd) {
      const productToUpdate = this.currentOrderList.find((product) => product.id === idToAdd);
      if (productToUpdate.quantity === 1) return;

      productToUpdate.quantity--;
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      const currentOrder = JSON.stringify(this.currentOrderList);
      localStorage.setItem('current-order', currentOrder);
    },
    setOrderListFromLocalStorage() {
      const orderListFromLocalStorage = JSON.parse(localStorage.getItem('current-order'));
      if (!orderListFromLocalStorage.length) return;

      this.currentOrderList = [...orderListFromLocalStorage];
    },
    toggleToast() {
      this.isToastActive = true;
      setTimeout(() => {
        this.isToastActive = false;
      }, 2000)
    }
  },
});
