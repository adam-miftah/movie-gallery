<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
/* Style dasar */
body {
  background-color: #141414; /* Hitam yang lebih soft dari #000 */
  color: #f8f9fa;
}

/* 1. Style untuk Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

/* Lapisan gradien gelap di atas gambar hero */
.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(20, 20, 20, 1) 10%, rgba(20, 20, 20, 0) 70%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.hero-overview {
  font-size: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}

/* 2. Style untuk Card Hover & Transition */
.movie-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
  z-index: 10;
}

/* 3. Style untuk Animasi Daftar Film (Vue TransitionGroup) */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
