<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// --- LOGIKA UNTUK EFEK SCROLL ---
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// --- LOGIKA UNTUK MENUTUP MENU MOBILE SETELAH NAVIGASI ---
const route = useRoute()
const navbarCollapseRef = ref(null)

watch(
  () => route.path,
  () => {
    const isMenuOpen = navbarCollapseRef.value?.classList.contains('show')
    if (isMenuOpen) {
      const toggler = document.querySelector('.navbar-toggler')
      if (toggler) {
        toggler.click()
      }
    }
  },
)
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
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent" ref="navbarCollapseRef">
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

/* --- STYLE UNTUK TOGGLE ANIMASI YANG KEREN --- */
.custom-toggler {
  border: none;
  padding: 0;
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background: transparent;
}

.custom-toggler:focus {
  outline: none;
  box-shadow: none;
}

.custom-toggler .bar {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

/* Animasi saat tombol diklik (menu terbuka) */
.custom-toggler[aria-expanded='true'] .bar:nth-child(1) {
  transform: translateY(9.5px) rotate(45deg);
}

.custom-toggler[aria-expanded='true'] .bar:nth-child(2) {
  opacity: 0;
}

.custom-toggler[aria-expanded='true'] .bar:nth-child(3) {
  transform: translateY(-9.5px) rotate(-45deg);
}

/* --- CSS TAMBAHAN UNTUK MEMAKSA TOGGLE HILANG DI DESKTOP --- */
@media (min-width: 992px) {
  .navbar-toggler {
    display: none;
  }
}
/* --- STYLE TAMBAHAN UNTUK MENU DROPDOWN BLUR DI MOBILE --- */
@media (max-width: 991.98px) {
  .navbar-collapse.show {
    background-color: rgba(20, 20, 20, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
