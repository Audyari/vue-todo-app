# Project Context

## Purpose
Aplikasi Todo sederhana yang dibangun dengan Vue.js untuk membantu pengelolaan tugas sehari-hari.

## Tech Stack
- Vue 3 (Composition API)
- Vite (Build Tool)
- TailwindCSS (Styling)
- Pinia (State Management)
- Vue Router (Routing)

## Project Conventions

### Code Style
- Menggunakan Composition API dengan `<script setup>`
- Nama komponen menggunakan PascalCase (contoh: `TodoList.vue`)
- Gunakan koma di akhir (trailing commas)
- Gunakan single quote untuk string
- 2 spasi untuk indentasi
- Semicolon di akhir pernyataan

### Architecture Patterns
- Komponen berbasis komposisi (Composition API)
- State management menggunakan Pinia untuk state global
- Komponen UI yang dapat digunakan kembali di folder `components/ui`

### Testing Strategy
- Unit test menggunakan Vitest
- Komponen testing menggunakan Vue Test Utils
- Coverage minimal 80% untuk komponen utama

### Git Workflow
- Branch `main` untuk production
- Branch `develop` untuk pengembangan
- Gunakan fitur branch untuk setiap fitur baru (contoh: `feature/add-todo`)
- Gunakan format commit message:
  - `feat:` untuk fitur baru
  - `fix:` untuk perbaikan bug
  - `refactor:` untuk perubahan kode yang tidak mengubah perilaku
  - `docs:` untuk perubahan dokumentasi

## Domain Context
- Aplikasi ini fokus pada manajemen tugas sederhana
- Setiap tugas memiliki judul, deskripsi, status (selesai/belum), dan tanggal
- Pengguna dapat membuat, membaca, memperbarui, dan menghapus tugas

## Important Constraints
- Harus berjalan di browser modern (Chrome, Firefox, Safari, Edge versi terbaru)
- Responsif untuk mobile dan desktop
- Aksesibilitas (a11y) yang baik

## External Dependencies
- Vue.js (Frontend Framework)
- Pinia (State Management)
- TailwindCSS (Styling)
- Vite (Build Tool)
- Vue Router (Routing)
- Heroicons (Icons)
