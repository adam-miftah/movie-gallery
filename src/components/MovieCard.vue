<script setup>
import { computed } from 'vue'

const props = defineProps({
  movie: { type: Object, required: true },
})

const title = computed(() => props.movie.title || props.movie.name)

const detailPath = computed(() => {
  if (props.movie.title) {
    return `/movie/${props.movie.id}`
  }
  if (props.movie.name) {
    return `/tv/${props.movie.id}`
  }
  return '/'
})

const getImageUrl = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Image'
</script>

<template>
  <div class="movie-card">
    <img :src="getImageUrl(movie.poster_path)" class="card-img" :alt="title" />

    <div class="card-rating">
      <span class="text-warning">⭐</span>
      {{ movie.vote_average.toFixed(1) }}
    </div>

    <div class="card-overlay">
      <h5 class="card-title-overlay">{{ title }}</h5>

      <RouterLink :to="detailPath" class="btn btn-primary btn-sm mt-2"> Lihat Detail </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Tidak ada perubahan pada style, biarkan seperti sebelumnya */
.movie-card {
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  aspect-ratio: 2/3;
  cursor: pointer; /* Tambah cursor pointer agar terasa bisa diklik */
}

.movie-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.4);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.movie-card:hover .card-img {
  transform: scale(1.1);
}

.card-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 1rem 1rem;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, transparent);
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.4s ease-out,
    opacity 0.4s ease-out;
  text-align: center; /* Pusatkan konten overlay */
}

.movie-card:hover .card-overlay {
  transform: translateY(0);
  opacity: 1;
}

.card-title-overlay {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
