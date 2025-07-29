<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const getImageUrl = (path) => {
  return path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Image'
}
</script>
<template>
  <div class="card h-100 text-bg-dark border-secondary shadow-sm">
    <img :src="getImageUrl(movie.poster_path)" class="card-img-top" :alt="movie.title" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold">{{ movie.title }}</h5>
      <p class="card-text text-muted">{{ movie.release_date?.substring(0, 4) || 'N/A' }}</p>
      <RouterLink :to="`/movie/${movie.id}`" class="btn btn-primary mt-auto">
        Lihat Detail
      </RouterLink>
    </div>
  </div>
</template>
