<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Spinner from '@/components/Spinner.vue'

// Ganti dengan API Key Anda
const API_KEY = 'b21c54f801f401d28b568feaaf240a29'

const route = useRoute()
const router = useRouter()
const showDetail = ref(null)
const isLoading = ref(true)

const getImageUrl = (path, quality = 'original') =>
  path ? `https://image.tmdb.org/t/p/${quality}${path}` : ''

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=${API_KEY}&append_to_response=videos`,
    )
    showDetail.value = response.data
  } catch (error) {
    console.error('Gagal mengambil detail TV show:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div
    v-if="isLoading"
    class="d-flex justify-content-center align-items-center"
    style="min-height: 100vh"
  >
    <Spinner />
  </div>

  <div v-else-if="showDetail" class="detail-view">
    <div
      class="detail-bg-image"
      :style="{ backgroundImage: `url(${getImageUrl(showDetail.backdrop_path)})` }"
    ></div>
    <div class="shader"></div>
    <div class="detail-content container">
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            :src="getImageUrl(showDetail.poster_path, 'w500')"
            class="img-fluid rounded shadow-lg"
            alt="TV Show Poster"
          />
        </div>
        <div class="col-md-8">
          <h1 class="display-4 fw-bold">{{ showDetail.name }}</h1>
          <p v-if="showDetail.tagline" class="text-white-50 fst-italic fs-5">
            "{{ showDetail.tagline }}"
          </p>

          <div class="d-flex align-items-center my-3">
            <span class="badge bg-warning text-dark fs-6 me-3"
              >⭐ {{ showDetail.vote_average.toFixed(1) }}</span
            >
            <span class="text-white-50"
              >{{ showDetail.number_of_seasons }} seasons /
              {{ showDetail.number_of_episodes }} episodes</span
            >
          </div>

          <p class="fs-5">{{ showDetail.overview }}</p>

          <div class="my-4">
            <p>
              <strong>Genre:</strong>
              <span
                v-for="genre in showDetail.genres"
                :key="genre.id"
                class="badge bg-light text-dark me-1"
                >{{ genre.name }}</span
              >
            </p>
            <p><strong>Tayang Pertama:</strong> {{ formatDate(showDetail.first_air_date) }}</p>
          </div>

          <div>
            <button @click="router.back()" class="btn btn-outline-light me-2">Kembali</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-view {
  position: relative;
  width: 100%;
  padding: 8rem 2rem;
  overflow-x: hidden;
  min-height: 100vh;
  z-index: 1;
}
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
  filter: blur(8px);
  transform: scale(1.1);
}
.shader {
  background: rgba(20, 20, 20, 0.6);
}
.detail-content {
  position: relative;
}
</style>
