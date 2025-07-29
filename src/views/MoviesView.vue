<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue'
import Pagination from '@/components/Pagination.vue'
import Spinner from '@/components/Spinner.vue'

// Ganti dengan API Key Anda
const API_KEY = 'b21c54f801f401d28b568feaaf240a29'

const movies = ref([])
const currentPage = ref(1)
const totalPages = ref(0)
const isLoading = ref(true)

const fetchTopRatedMovies = async (page = 1) => {
  isLoading.value = true
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`,
    )
    movies.value = response.data.results
    currentPage.value = response.data.page
    // Batasi total halaman agar tidak terlalu banyak, misal maksimal 500
    totalPages.value = Math.min(response.data.total_pages, 500)
  } catch (error) {
    console.error('Gagal mengambil data film top rated:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchTopRatedMovies()
})
</script>

<template>
  <div class="container-fluid py-5 px-4">
    <h1 class="display-4 fw-bold text-center mb-5">Top Rated Movies</h1>

    <Spinner v-if="isLoading" />

    <div v-else>
      <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
        <div v-for="movie in movies" :key="movie.id" class="col">
          <MovieCard :movie="movie" />
        </div>
      </div>
      <div class="mt-5">
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="fetchTopRatedMovies"
        />
      </div>
    </div>
  </div>
</template>
