// src/services/apiService.js
import axios from 'axios'

// GANTI DENGAN API KEY ANDA SENDIRI DARI TMDB
const API_KEY = 'b21c54f801f401d28b568feaaf240a29'
const BASE_URL = 'https://api.themoviedb.org/3'

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})

export const fetchPopularMovies = () => apiClient.get('/movie/popular')
export const searchMovies = (query) => apiClient.get('/search/movie', { params: { query } })
export const fetchMovieById = (id) =>
  apiClient.get(`/movie/${id}`, {
    params: { append_to_response: 'videos' },
  })
