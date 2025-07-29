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
  <div class="card h-100 text-bg-dark border-secondary shadow-sm overflow-hidden">
    <img
      :src="getImageUrl(movie.poster_path)"
      class="card-img-top"
      :alt="movie.title"
      style="aspect-ratio: 2/3; object-fit: cover"
    />

    <div class="card-body d-flex flex-column p-3">
      <div>
        <h5 class="card-title fw-bold title-clamp" :title="movie.title">
          {{ movie.title }}
        </h5>
        <p class="card-text text-muted mb-2">
          {{ movie.release_date?.substring(0, 4) || 'N/A' }}
        </p>

        <p class="card-text mb-3">
          <span class="text-warning">⭐</span>
          {{ movie.vote_average.toFixed(1) }}
        </p>
      </div>

      <RouterLink :to="`/movie/${movie.id}`" class="btn btn-primary mt-auto w-100">
        Lihat Detail
      </RouterLink>
    </div>
  </div>
</template>
