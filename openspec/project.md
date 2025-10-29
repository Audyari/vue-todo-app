# Project Context

## Purpose
Aplikasi Todo sederhana yang dibangun dengan Vue 3 untuk membantu pengelolaan tugas sehari-hari. Aplikasi ini memungkinkan pengguna untuk:
- Menambahkan tugas baru
- Menandai tugas sebagai selesai/belum selesai
- Mengedit dan menghapus tugas
- Memfilter tugas berdasarkan status (semua/aktif/selesai)
- Menyimpan tugas di localStorage browser

## Tech Stack
- **Frontend Framework**: Vue 3 (Composition API)
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Conventions

### Code Style
- Menggunakan Composition API dengan `<script setup>`
- Nama komponen menggunakan PascalCase (contoh: `TodoItem.vue`)
- Props dan events menggunakan kebab-case (contoh: `@todo-click`)
- Komponen UI disimpan di direktori `src/components/ui/`
- State management menggunakan Pinia store

### Architecture Patterns
- **Komponen**: Arsitektur berbasis komponen dengan pembagian yang jelas
- **State Management**: Menggunakan Pinia untuk manajemen state global
- **Komposisi**: Memanfaatkan Composition API untuk logika yang dapat digunakan kembali
- **Unidirectional Data Flow**: Data mengalir dari parent ke child melalui props, dan perubahan dikomunikasikan melalui events

### Testing Strategy
- Belum diimplementasikan, namun direncanakan menggunakan:
  - Vitest untuk unit testing
  - Testing Library Vue untuk pengujian komponen
  - Cypress untuk pengujian E2E

### Git Workflow
- Branch `main` sebagai branch produksi
- Fitur baru dikembangkan di branch terpisah dengan format `feature/nama-fitur`
- Commit message mengikuti konvensi:
  - `feat:` untuk fitur baru
  - `fix:` untuk perbaikan bug
  - `refactor:` untuk perubahan kode yang tidak mengubah perilaku
  - `docs:` untuk perubahan dokumentasi
  - `style:` untuk perubahan format (spasi, koma, dll)
  - `chore:` untuk perubahan build process atau tools

## Domain Context
- **Todo**: Sebuah tugas yang memiliki:
  - ID (unik)
  - Judul (wajib)
  - Status (selesai/belum selesai)
  - Timestamp pembuatan
- **Filter**: Status filter untuk menampilkan todo:
  - Semua (default)
  - Aktif (belum selesai)
  - Selesai

## Important Constraints
- Data disimpan di localStorage browser
- Tidak ada autentikasi pengguna
- Dibangun sebagai single page application (SPA)

## External Dependencies
- **Vue 3**: Framework JavaScript progresif
- **Pinia**: State management untuk Vue
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool dan development server
- **@vitejs/plugin-vue**: Plugin Vite untuk Vue
