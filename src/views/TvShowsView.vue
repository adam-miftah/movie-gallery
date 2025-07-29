<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue' // Kita pakai ulang MovieCard
import Pagination from '@/components/Pagination.vue'
import Spinner from '@/components/Spinner.vue'

// Ganti dengan API Key Anda
const API_KEY = 'b21c54f801f401d28b568feaaf240a29'

const tvShows = ref([])
const currentPage = ref(1)
const totalPages = ref(0)
const isLoading = ref(true)

const fetchPopularTvShows = async (page = 1) => {
  isLoading.value = true
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`,
    )
    // API untuk TV Show menggunakan 'name' bukan 'title'
    // dan 'first_air_date' bukan 'release_date'.
    // Kita akan sesuaikan ini di MovieCard.
    tvShows.value = response.data.results
    currentPage.value = response.data.page
    totalPages.value = Math.min(response.data.total_pages, 500)
  } catch (error) {
    console.error('Gagal mengambil data TV shows:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPopularTvShows()
})
</script>

<template>
  <div class="container-fluid py-5 px-4 mt-5">
    <h1 class="display-4 fw-bold text-center mb-5">Popular TV Shows</h1>

    <Spinner v-if="isLoading" />

    <div v-else>
      <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
        <div v-for="show in tvShows" :key="show.id" class="col">
          <MovieCard :movie="show" />
        </div>
      </div>
      <div class="mt-5">
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="fetchPopularTvShows"
        />
      </div>
    </div>
  </div>
</template>
