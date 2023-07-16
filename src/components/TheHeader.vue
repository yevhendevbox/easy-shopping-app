<template>
  <v-layout class="flex-grow-0 mb-8">
    <v-app-bar :elevation="1"
      title="Easy Shopping"
      class="bg-purple-lighten-3">
      <template #append>
        <v-btn to="/">
          <v-icon class="mr-2">mdi-view-list</v-icon>
          Products
        </v-btn>
        <v-btn to="/cart">
          <v-icon class="mr-2">mdi-cart</v-icon>
          Cart
        </v-btn>
        <base-cart-badge />
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script setup>
import BaseCartBadge from './BaseCartBadge.vue';
</script>

<style scoped></style>