<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import Spinner from '@/components/Spinner.vue'

const route = useRoute()
const movieStore = useMovieStore()

onMounted(() => {
  movieStore.getMovieDetail(route.params.id)
})

const getImageUrl = (path) => {
  return path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Image'
}
</script>
<template>
  <div class="container py-5">
    <Spinner v-if="movieStore.isLoading" />

    <div v-else-if="movieStore.error" class="alert alert-danger">{{ movieStore.error }}</div>

    <div v-else-if="movieStore.movieDetail" class="row">
      <div class="col-md-4">
        <img
          :src="getImageUrl(movieStore.movieDetail.poster_path)"
          class="img-fluid rounded"
          alt=""
        />
      </div>
      <div class="col-md-8">
        <h1 class="fw-bold">{{ movieStore.movieDetail.title }}</h1>
        <p class="text-muted fst-italic">{{ movieStore.movieDetail.tagline }}</p>
        <hr />
        <h5 class="fw-bold">Overview</h5>
        <p>{{ movieStore.movieDetail.overview }}</p>
        <hr />
        <p><strong>Rilis:</strong> {{ movieStore.movieDetail.release_date }}</p>
        <p><strong>Rating:</strong> ⭐ {{ movieStore.movieDetail.vote_average.toFixed(1) }} / 10</p>
        <p>
          <strong>Genre:</strong>
          <span
            v-for="genre in movieStore.movieDetail.genres"
            :key="genre.id"
            class="badge bg-secondary me-1"
            >{{ genre.name }}</span
          >
        </p>
        <RouterLink to="/" class="btn btn-primary mt-3">Kembali ke Beranda</RouterLink>
      </div>
    </div>
  </div>
</template>
