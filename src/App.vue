<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
