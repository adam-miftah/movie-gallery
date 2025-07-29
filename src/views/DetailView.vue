<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import Spinner from '@/components/Spinner.vue'

const route = useRoute()
const router = useRouter()
const movieStore = useMovieStore()

const getImageUrl = (path, quality = 'w500') => {
  return path ? `https://image.tmdb.org/t/p/${quality}${path}` : ''
}

const trailer = computed(() => {
  if (!movieStore.movieDetail?.videos) return null
  // Cari video pertama yang merupakan Trailer resmi di YouTube
  return movieStore.movieDetail.videos.results.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer',
  )
})

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

onMounted(() => {
  movieStore.getMovieDetail(route.params.id)
})
</script>

<template>
  <div
    v-if="movieStore.isLoading"
    class="d-flex justify-content-center align-items-center"
    style="min-height: 100vh"
  >
    <Spinner />
  </div>

  <div v-else-if="movieStore.error" class="container py-5">
    <div class="alert alert-danger">{{ movieStore.error }}</div>
  </div>

  <div v-else-if="movieStore.movieDetail" class="detail-view">
    <div
      class="detail-bg-image"
      :style="{
        backgroundImage: `url(${getImageUrl(movieStore.movieDetail.backdrop_path, 'original')})`,
      }"
    ></div>
    <div class="shader"></div>

    <div class="detail-content container">
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            :src="getImageUrl(movieStore.movieDetail.poster_path)"
            class="img-fluid rounded shadow-lg"
            alt="Movie Poster"
          />
        </div>
        <div class="col-md-8">
          <h1 class="display-4 fw-bold">{{ movieStore.movieDetail.title }}</h1>
          <p v-if="movieStore.movieDetail.tagline" class="text-white-50 fst-italic fs-5">
            "{{ movieStore.movieDetail.tagline }}"
          </p>

          <div class="d-flex align-items-center my-3">
            <span class="badge bg-warning text-dark fs-6 me-3"
              >⭐ {{ movieStore.movieDetail.vote_average.toFixed(1) }}</span
            >
            <span class="text-white-50">{{ movieStore.movieDetail.runtime }} menit</span>
          </div>

          <p class="fs-5">{{ movieStore.movieDetail.overview }}</p>

          <div class="my-4">
            <p>
              <strong>Genre:</strong>
              <span
                v-for="genre in movieStore.movieDetail.genres"
                :key="genre.id"
                class="badge bg-light text-dark me-1"
                >{{ genre.name }}</span
              >
            </p>
            <p>
              <strong>Tanggal Rilis:</strong> {{ formatDate(movieStore.movieDetail.release_date) }}
            </p>
          </div>

          <div>
            <button @click="router.back()" class="btn btn-outline-light me-2">Kembali</button>
            <a
              v-if="trailer"
              :href="`https://www.youtube.com/watch?v=${trailer.key}`"
              target="_blank"
              class="btn btn-danger"
            >
              <i class="bi bi-youtube"></i> Tonton Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-view {
  /* Hapus properti display, align-items, dan min-height dari sini */
  position: relative;
  width: 100%;
  padding: 8rem 2rem; /* Padding untuk memberi ruang dari navbar dan footer */
  overflow-x: hidden;
  z-index: 1; /* Pastikan konten berada di atas background */
}

/* Keduanya dibuat menempel di layar dan ditaruh di belakang */
.detail-bg-image,
.shader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.detail-bg-image {
  background-size: cover;
  background-position: center;
  filter: blur(8px); /* Efek blur pada gambar */
  transform: scale(1.1); /* Sedikit zoom agar blur di tepi tidak terlihat kosong */
}

.shader {
  background: rgba(20, 20, 20, 0.6); /* Lapisan gelap agar teks mudah dibaca */
}

.detail-content {
  /* Tidak perlu style khusus lagi, biarkan default */
  position: relative;
}
</style>
