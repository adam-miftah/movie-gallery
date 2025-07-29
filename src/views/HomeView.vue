<script setup>
import { onMounted, ref, computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import MovieCard from '@/components/MovieCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import Spinner from '@/components/Spinner.vue'

const movieStore = useMovieStore()
const isExpanded = ref(false)
const moviesPerRow = 8
const currentSearchQuery = ref('')

onMounted(() => {
  if (movieStore.movies.length === 0) {
    movieStore.getMovies()
  }
})

const handleSearch = (query) => {
  isExpanded.value = true
  currentSearchQuery.value = query
  movieStore.getMovies(query)
}

const visibleMovies = computed(() => {
  if (isExpanded.value || currentSearchQuery.value) {
    return movieStore.movies
  }
  return movieStore.movies.slice(0, moviesPerRow)
})

const getBackdropUrl = (path) => {
  return path ? `https://image.tmdb.org/t/p/original${path}` : ''
}
</script>

<template>
  <div>
    <section
      v-if="!currentSearchQuery && movieStore.movies.length > 0"
      class="hero-section"
      :style="{
        backgroundImage: 'url(' + getBackdropUrl(movieStore.movies[0].backdrop_path) + ')',
      }"
    >
      <div class="hero-content">
        <h1 class="hero-title">{{ movieStore.movies[0].title }}</h1>
        <p class="hero-overview">{{ movieStore.movies[0].overview }}</p>
        <RouterLink :to="`/movie/${movieStore.movies[0].id}`" class="btn btn-primary btn-lg">
          Lihat Detail
        </RouterLink>
      </div>
    </section>

    <div class="container-fluid py-4 px-4">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-6">
          <SearchBar @search="handleSearch" />
        </div>
      </div>

      <h2 class="mb-4 fw-bold">{{ currentSearchQuery ? 'Hasil Pencarian' : 'Lagi Populer' }}</h2>

      <Spinner v-if="movieStore.isLoading" />

      <div v-else-if="movieStore.error" class="alert alert-danger">{{ movieStore.error }}</div>

      <div v-else-if="!movieStore.movies.length" class="alert alert-info">
        Tidak ada film yang ditemukan.
      </div>

      <div v-else>
        <TransitionGroup
          tag="div"
          name="list"
          class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"
        >
          <div v-for="movie in visibleMovies" :key="movie.id" class="col">
            <MovieCard :movie="movie" />
          </div>
        </TransitionGroup>

        <div v-if="!isExpanded && movieStore.movies.length > moviesPerRow" class="text-center mt-4">
          <button @click="isExpanded = true" class="btn btn-outline-primary btn-lg">
            Tampilkan Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
