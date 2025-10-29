# Project Context

## Purpose
Aplikasi Todo sederhana yang dibangun dengan Vue.js 3 dan Vite. Tujuan proyek ini adalah untuk menyediakan antarmuka yang bersih dan mudah digunakan untuk mengelola daftar tugas harian.

## Tech Stack
- **Frontend Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Version Control**: Git
- **Deployment**: Static Hosting (bisa di-deploy di Vercel, Netlify, atau layanan sejenis)

## Project Conventions

### Code Style
- Gunakan 2 spasi untuk indentasi
- Gunakan single quote untuk string
- Komponen Vue menggunakan PascalCase (contoh: `TodoList.vue`)
- Variabel dan fungsi menggunakan camelCase
- Komponen yang dapat digunakan kembali diletakkan di folder `src/components`
- Halaman diletakkan di folder `src/views`

### Architecture Patterns
- Komposisi berbasis Composition API
- State management sederhana menggunakan `reactive` atau `ref` dari Vue
- Komponen yang dapat digunakan kembali (reusable components)
- Struktur folder berbasis fitur (feature-based folder structure)

### Testing Strategy
- Unit testing menggunakan Vitest (rekomendasi)
- Komponen testing menggunakan Vue Test Utils
- Coverage minimal 70% untuk komponen kritis

### Git Workflow
- Branch `main` untuk produksi
- Branch `develop` untuk pengembangan
- Buat fitur baru di branch terpisah dengan format: `feature/nama-fitur`
- Gunakan Conventional Commits untuk pesan commit
- Lakukan code review sebelum merge ke develop

## Domain Context
- Aplikasi ini adalah aplikasi manajemen tugas sederhana
- Setiap tugas memiliki judul, deskripsi, status (selesai/belum selesai), dan tanggal tenggat waktu
- Pengguna dapat menambahkan, mengedit, menghapus, dan menandai tugas sebagai selesai

## Important Constraints
- Aplikasi harus ringan dan cepat dimuat
- Harus berjalan di browser modern terbaru
- Responsif dan dapat diakses di perangkat mobile

## External Dependencies
- Vue.js 3: Framework JavaScript progresif
- Vite: Build tool dan development server
- pnpm: Package manager yang cepat dan hemat ruang disk
