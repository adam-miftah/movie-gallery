<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import MovieCard from '@/components/MovieCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import Spinner from '@/components/Spinner.vue'

const movieStore = useMovieStore()

onMounted(() => {
  // Hanya fetch jika daftar film kosong
  if (movieStore.movies.length === 0) {
    movieStore.getMovies()
  }
})
</script>
<template>
  <div class="container py-4">
    <SearchBar @search="movieStore.getMovies" />

    <Spinner v-if="movieStore.isLoading" />

    <div v-else-if="movieStore.error" class="alert alert-danger">{{ movieStore.error }}</div>

    <div v-else-if="!movieStore.movies.length" class="alert alert-info">
      Tidak ada film yang ditemukan.
    </div>

    <div v-else class="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      <div v-for="movie in movieStore.movies" :key="movie.id" class="col">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>
