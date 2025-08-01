AdamMovie 🎬
AdamMovie adalah sebuah galeri film dan acara TV modern yang dibangun dengan Vue.js 3 dan Vite. Proyek ini menampilkan antarmuka yang bersih, responsif, dan kaya akan fitur, dirancang untuk memberikan pengalaman menjelajah sinema yang menyenangkan dan intuitif.

✨ Fitur Utama
Desain Responsif: Tampilan yang optimal di semua perangkat, dari mobile hingga desktop.

Hero Section Dinamis: Menampilkan film paling populer sebagai sorotan utama di halaman depan.

Navigasi Halaman: Halaman terpisah untuk Film Populer, Top Rated, dan Acara TV Populer.

Halaman Detail Sinematik: Latar belakang dinamis yang imersif dan informasi lengkap untuk setiap film atau acara TV.

Tombol Tonton Trailer: Link langsung ke trailer di YouTube jika tersedia.

Pencarian Real-time: Fitur pencarian untuk menemukan film dengan cepat.

Pagination Cerdas: Navigasi halaman yang modern dan tidak memuat semua nomor halaman sekaligus.

UI Modern: Dilengkapi dengan efek glassmorphism, animasi hover yang halus, dan transisi antar halaman.

🛠️ Teknologi yang Digunakan
Framework: Vue.js 3 (Composition API dengan <script setup>)

Build Tool: Vite

Styling: Bootstrap 5 & Bootstrap Icons

Routing: Vue Router

State Management: Pinia

HTTP Client: Axios

Deployment: Vercel

🚀 Instalasi & Menjalankan Proyek
Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

1. Clone Repository
git clone https://github.com/adam-miftah/movie-gallery.git
cd movie-gallery

2. Install Dependencies
npm install

3. Konfigurasi API Key 🔑
Proyek ini membutuhkan API key dari The Movie Database (TMDb).

Buat file baru di root proyek dengan nama .env.

Isi file tersebut dengan API Key Anda dari TMDb.

VITE_TMDB_API_KEY=MASUKKAN_API_KEY_ANDA_DISINI

Penting: Ganti MASUKKAN_API_KEY_ANDA_DISINI di file-file view (MoviesView.vue, TvDetailView.vue, dll) dengan import.meta.env.VITE_TMDB_API_KEY.

Contoh di MoviesView.vue:

// Ganti ini:
const API_KEY = 'MASUKKAN_API_KEY_ANDA_DISINI';

// Menjadi ini:
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

4. Jalankan Server Development
npm run dev

Aplikasi akan berjalan di http://localhost:5173.

📄 API
Proyek ini sepenuhnya menggunakan data dari The Movie Database (TMDb) API. Terima kasih kepada TMDb karena telah menyediakan API yang luar biasa untuk para developer.
