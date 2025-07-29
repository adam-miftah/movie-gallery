<script setup>
import { onMounted, ref, computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import MovieCard from '@/components/MovieCard.vue'
import SearchBar from '@/components/SearchBar.vue' // 1. Impor kembali SearchBar
import Spinner from '@/components/Spinner.vue'

const movieStore = useMovieStore()
const isExpanded = ref(false)
const moviesPerRow = 8

onMounted(() => {
  if (movieStore.movies.length === 0) {
    movieStore.getMovies()
  }
})

// 2. Tambahkan kembali fungsi handleSearch
const handleSearch = (query) => {
  isExpanded.value = true // Selalu tampilkan semua hasil pencarian
  movieStore.getMovies(query)
}

const visibleMovies = computed(() => {
  if (isExpanded.value || movieStore.searchQuery) {
    // Ditambah kondisi pencarian
    return movieStore.movies
  }
  return movieStore.movies.slice(0, moviesPerRow)
})
</script>

<template>
  <div class="container-fluid py-4 px-4">
    <div class="row justify-content-center mb-4">
      <div class="col-lg-6">
        <SearchBar @search="handleSearch" />
      </div>
    </div>

    <Spinner v-if="movieStore.isLoading" />

    <div v-else-if="movieStore.error" class="alert alert-danger">{{ movieStore.error }}</div>

    <div v-else-if="!movieStore.movies.length" class="alert alert-info">
      Tidak ada film yang ditemukan.
    </div>

    <div v-else>
      <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div v-for="movie in visibleMovies" :key="movie.id" class="col">
          <MovieCard :movie="movie" />
        </div>
      </div>

      <div v-if="!isExpanded && movieStore.movies.length > moviesPerRow" class="text-center mt-4">
        <button @click="isExpanded = true" class="btn btn-outline-primary btn-lg">
          Tampilkan Lebih Banyak
        </button>
      </div>
    </div>
  </div>
</template>
