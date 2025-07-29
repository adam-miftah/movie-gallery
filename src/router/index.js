// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import MoviesView from '@/views/MoviesView.vue' // <-- Path diperbaiki
import TvShowsView from '@/views/TvShowsView.vue' // <-- Path diperbaiki
import TvDetailView from '@/views/TvDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/movie/:id', name: 'movie-detail', component: DetailView },
    // RUTE BARU
    { path: '/movies', name: 'movies', component: MoviesView },
    { path: '/tv-shows', name: 'tv-shows', component: TvShowsView },
    { path: '/tv/:id', name: 'tv-detail', component: TvDetailView },
  ],
})

export default router
