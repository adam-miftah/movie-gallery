<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style>
/* Optional: Tambahkan style global di sini jika perlu */
body {
  background-color: #212529; /* Warna background dark-mode Bootstrap */
  color: #f8f9fa; /* Warna teks light Bootstrap */
}
</style>
