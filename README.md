🎬 AdamMovie 🍿

Selamat datang di AdamMovie! Gerbang Anda menuju dunia sinema yang tak terbatas. Proyek ini adalah sebuah galeri film dan acara TV modern yang dirancang dengan antarmuka yang bersih, responsif, dan imersif untuk memberikan pengalaman menjelajah terbaik.

---
✨ Mengapa AdamMovie?

Di tengah lautan konten digital, menemukan tontonan berikutnya seharusnya menjadi pengalaman yang menyenangkan. AdamMovie menawarkan:

🧑‍💻 Antarmuka Modern & Imersif: Pengalaman pengguna yang sinematik, fokus pada visual, dan mudah dinavigasi.

⚙️ Fitur Lengkap: Dari film populer hingga detail acara TV, semua informasi penting ada di ujung jari Anda.

⚡ Performa Cepat: Dibangun dengan Vite dan Vue 3, memastikan waktu muat yang sangat cepat dan interaksi yang mulus.

📱 Desain Responsif Penuh: Tampilan sempurna di semua perangkat, baik itu desktop, tablet, maupun mobile.

💡 Fleksibel & Terbuka: Kode yang bersih dan terstruktur, siap untuk dikembangkan lebih lanjut.

---
🎯 Fitur Unggulan
🖼️ Hero Section Dinamis di halaman utama yang menampilkan film paling populer.

📇 Desain Kartu Modern dengan efek hover overlay dan rating yang elegan.

📄 Halaman Detail Sinematik dengan latar belakang backdrop yang imersif.

🎞️ Tombol Tonton Trailer yang mengarahkan langsung ke YouTube.

🔍 Pencarian Film secara real-time.

🔢 Pagination Cerdas & Keren untuk menavigasi ribuan judul dengan mudah.

📱 Navbar Responsif dengan efek glassmorphism dan toggle animasi yang keren.

🌐 SEO Friendly dengan meta tag yang dioptimalkan untuk mesin pencari dan media sosial.

---
🛠️ Stack Teknologi

Aplikasi ini dibangun dengan teknologi modern:

Frontend Framework: Vue.js 3 (Composition API)

Build Tool: Vite

Styling: Bootstrap 5 & Bootstrap Icons

Routing: Vue Router

State Management: Pinia

HTTP Client: Axios

Deployment: Vercel

---
```
🚀 Memulai (Getting Started)
Ingin mencoba atau berkontribusi pada proyek ini? Ikuti langkah-langkah berikut:

1. Prasyarat
Pastikan Anda memiliki Node.js (versi 16+ direkomendasikan).

npm atau yarn terinstal.

2. Instalasi
1. Clone repository
   Ganti 'nama-anda/adam-movie' dengan URL repository GitHub Anda
   git clone https://github.com/nama-anda/movie-gallery.git
   cd movie-gallery

2. Install semua dependencies
   npm install

3. Konfigurasi API Key
   Proyek ini membutuhkan API key dari The Movie Database (TMDb).
   Dapatkan kunci Anda di: https://www.themoviedb.org/settings/api

4. Buat file environment baru
   cp .env.example .env

5. Buka file .env dan masukkan API Key Anda
     VITE_TMDB_API_KEY=MASUKKAN_KUNCI_API_ANDA_DI_SINI

6. Ganti API Key di dalam file-file komponen
   Cari 'MASUKKAN_API_KEY_ANDA_DISINI' di dalam proyek dan ganti dengan import.meta.env.VITE_TMDB_API_KEY
   Contoh di MoviesView.vue:
   const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

7. Jalankan server pengembangan
npm run dev

Aplikasi Anda sekarang akan berjalan di http://localhost:5173.
```

---
🗺️ Roadmap Proyek (Rencana ke Depan)
Fitur "Watchlist" untuk menyimpan film & acara TV.

Sistem Autentikasi Pengguna (Login/Register).

Fitur Ulasan & Rating dari pengguna.

Filter Berdasarkan Genre di halaman Movies & TV Shows.

Mode Terang/Gelap yang bisa diganti oleh pengguna.

---
🤝 Ingin Berkontribusi?

Kontribusi Anda sangat kami harapkan! Baik itu berupa ide, laporan bug, atau pull request.

Fork repository ini.

Buat Branch baru (git checkout -b fitur/NamaFiturAnda).

Commit perubahan Anda (git commit -m 'Menambahkan fitur keren').

Push ke branch Anda (git push origin fitur/NamaFiturAnda).

Buat Pull Request baru.

---
💌 Kontak & Dukungan

Punya pertanyaan, saran, atau ingin berdiskusi?

Email: [adammiftah196@gmail.com]

GitHub Issues: Buka Isu Baru
