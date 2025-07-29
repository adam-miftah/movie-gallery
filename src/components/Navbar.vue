<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// State untuk melacak posisi scroll
const isScrolled = ref(false)

// Fungsi untuk mengubah state saat user scroll
const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

// Tambahkan & hapus event listener saat komponen dimuat & dihancurkan
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled-nav': isScrolled }">
    <div class="container-fluid">
      <RouterLink class="navbar-brand fs-4 fw-bold d-flex align-items-center" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-film me-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zm-2 3H1v2h2zm2 3H1v2h2zM15 1v2h-2V1zm-2 3h2v2h-2zm2 3h2v2h-2zm-2 3h2v2h-2z"
          />
        </svg>
        <span>AdamMovie</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/movies">Movies</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/tv-shows">TV Shows</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
/* State awal navbar: transparan */
.navbar {
  background-color: transparent;
  transition:
    background-color 0.4s ease-out,
    backdrop-filter 0.4s ease-out;
}

/* Memastikan semua link di navbar berwarna putih dan memiliki efek */
.navbar :deep(a.navbar-brand),
.navbar :deep(.navbar-nav .nav-link) {
  color: white !important;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Shadow agar teks lebih terbaca */
  border-bottom: 3px solid transparent;
  padding-bottom: 6px;
  transition: border-color 0.3s ease;
}

/* Style untuk link yang sedang aktif */
.navbar :deep(.navbar-nav .nav-link.router-link-active) {
  border-bottom-color: #0d6efd;
  color: #0d6efd !important;
}

/* State navbar setelah di-scroll */
.navbar.scrolled-nav {
  background-color: rgba(20, 20, 20, 0.8); /* Warna semi-transparan */
  backdrop-filter: blur(10px); /* Efek glassmorphism */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
