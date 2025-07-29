// src/stores/movieStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchPopularMovies, searchMovies, fetchMovieById } from '@/services/apiService'

export const useMovieStore = defineStore('movies', () => {
  // State
  const movies = ref([])
  const movieDetail = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // Actions
  async function getMovies(query = '') {
    isLoading.value = true
    error.value = null
    try {
      const response = query ? await searchMovies(query) : await fetchPopularMovies()
      movies.value = response.data.results
    } catch (err) {
      error.value = 'Gagal memuat data film. Coba lagi nanti.'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  async function getMovieDetail(id) {
    isLoading.value = true
    error.value = null
    movieDetail.value = null
    try {
      const response = await fetchMovieById(id)
      movieDetail.value = response.data
    } catch (err) {
      error.value = 'Gagal memuat detail film.'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { movies, movieDetail, isLoading, error, getMovies, getMovieDetail }
})
