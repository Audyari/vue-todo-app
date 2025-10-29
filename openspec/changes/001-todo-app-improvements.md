# Todo App Improvements

## Status
Proposed

## Context
Aplikasi Todo saat ini sudah memiliki fungsi dasar CRUD (Create, Read, Update, Delete) untuk manajemen tugas. Namun, masih ada beberapa fitur dan perbaikan yang bisa ditambahkan untuk meningkatkan pengalaman pengguna dan kualitas kode.

## Proposed Changes

### 1. Persistensi Data dengan LocalStorage
- Menyimpan state todos ke localStorage
- Memuat state dari localStorage saat aplikasi dimuat
- Menggunakan watch untuk menyimpan perubahan secara otomatis

### 2. Edit Todo yang Sudah Ada
- Menambahkan fungsi edit pada setiap item todo
- Mengubah tampilan card untuk menampilkan form edit saat mode edit aktif

### 3. Pencarian Todo
- Menambahkan input pencarian di header
- Menerapkan filter real-time berdasarkan input pengguna

### 4. Kategori/Tag
- Menambahkan field kategori pada setiap todo
- Menampilkan daftar kategori di sidebar
- Filter todo berdasarkan kategori

### 5. Due Date
- Menambahkan tanggal jatuh tempo untuk setiap todo
- Menampilkan indikator untuk todo yang sudah melewati due date
- Filter todo berdasarkan due date

### 6. Tema Gelap/Terang
- Menambahkan toggle tema di header
- Menggunakan CSS variables untuk tema
- Menyimpan preferensi tema pengguna

## Implementation Plan

### Phase 1: Persistensi Data & Edit Todo
1. Memodifikasi store untuk menangani penyimpanan di localStorage
2. Menambahkan fungsi edit pada store
3. Memperbarui komponen TodoItem untuk mendukung mode edit

### Phase 2: Pencarian & Kategori
1. Menambahkan komponen SearchBar
2. Memperbarui store untuk menangani pencarian
3. Menambahkan manajemen kategori

### Phase 3: Due Date & Tema
1. Menambahkan date picker untuk due date
2. Mengimplementasikan tema gelap/terang
3. Menambahkan animasi transisi

## Dependencies
- `date-fns` untuk manipulasi tanggal
- `@headlessui/vue` untuk komponen UI yang lebih baik

## Risks
- Perubahan pada struktur data yang sudah ada
- Kompatibilitas dengan browser lama (jika menggunakan fitur baru)

## Testing Strategy
- Unit test untuk fungsi-fungsi utilitas
- Component test untuk komponen UI
- E2E test untuk alur utama aplikasi

## Metrics
- Waktu pemuatan aplikasi
- Waktu respons interaksi pengguna
- Ukuran bundle

## Rollback Plan
Jika terjadi masalah:
1. Kembali ke versi sebelumnya menggunakan git
2. Nonaktifkan fitur yang bermasalah
3. Perbarui dokumentasi untuk menandai fitur yang tidak stabil
