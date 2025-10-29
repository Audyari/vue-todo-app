# Project Context

## Purpose
Aplikasi To-Do List sederhana yang dibangun dengan Vue.js 3 dan Pinia untuk manajemen state. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus tugas (CRUD operations).

## Tech Stack
- Vue.js 3 (Composition API)
- Pinia (State Management)
- Vite (Build Tool & Development Server)
- TailwindCSS (Styling)
- JavaScript (ES6+)

## Project Conventions

### Code Style
- Gunakan 2 spasi untuk indentasi
- Gunakan single quote untuk string
- Tambahkan koma di akhir (trailing commas) untuk object dan array multi-baris
- Komponen Vue menggunakan PascalCase (contoh: TodoList.vue)
- File JavaScript menggunakan camelCase (contoh: todoStore.js)

### Architecture Patterns
- Komposisi berbasis komponen (Component-based architecture)
- State management menggunakan Pinia
- Penggunaan Composition API untuk logika yang dapat digunakan kembali (composables)

### Testing Strategy
- [TODO: Tambahkan strategi testing]

### Git Workflow
- Gunakan Conventional Commits (feat:, fix:, docs:, style:, refactor:, test:, chore:)
- Buat branch fitur untuk pengembangan fitur baru (contoh: `feature/add-todo`)
- Lakukan pull request untuk menggabungkan perubahan ke branch main

## Domain Context
Aplikasi ini fokus pada manajemen tugas sederhana dengan fitur:
- Menambahkan tugas baru
- Menandai tugas sebagai selesai
- Menghapus tugas
- Filter tugas (semua/aktif/selesai)

## Important Constraints
- Aplikasi berjalan di browser modern (Chrome, Firefox, Safari, Edge versi terbaru)
- Data disimpan di local storage browser

## External Dependencies
- Vue.js (Frontend Framework)
- Pinia (State Management)
- TailwindCSS (Styling)
- Vite (Build Tool)
