# Todo App - Vue 3

Aplikasi Todo sederhana dan modern yang dibangun dengan Vue 3 untuk membantu Anda mengelola tugas sehari-hari dengan mudah.

![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883?style=flat-square&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=flat-square&logo=tailwind-css)
![Pinia](https://img.shields.io/badge/Pinia-2.x-ffd859?style=flat-square)

## ✨ Fitur

- ✅ **Tambah Tugas** - Buat tugas baru dengan cepat
- 🎯 **Tandai Selesai** - Tandai tugas yang sudah dikerjakan
- ✏️ **Edit Tugas** - Ubah judul tugas kapan saja
- 🗑️ **Hapus Tugas** - Hapus tugas yang tidak diperlukan
- 🔍 **Filter Tugas** - Lihat tugas berdasarkan status (Semua/Aktif/Selesai)
- 💾 **Penyimpanan Lokal** - Data tersimpan otomatis di browser

## 🚀 Quick Start

### Prerequisites

Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
- npm (biasanya sudah termasuk dengan Node.js)

### Instalasi

1. **Clone repository**
```bash
git clone git@github.com:Audyari/vue-todo-app.git
cd vue-todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan development server**
```bash
npm run dev
```

4. **Buka browser**
```
http://localhost:5173
```

## 📦 Tech Stack

- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript Framework
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[Pinia](https://pinia.vuejs.org/)** - State Management untuk Vue
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-First CSS Framework

## 📁 Struktur Proyek

```
todo-app-vue3/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, dll
│   ├── components/      # Komponen Vue
│   │   └── ui/          # Komponen UI reusable
│   ├── stores/          # Pinia stores
│   ├── App.vue          # Root component
│   └── main.js          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Development

### Available Scripts

```bash
# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Lint kode
npm run lint

# Format kode (jika menggunakan Prettier)
npm run format
```

### Code Conventions

**Komponen**
- Gunakan `<script setup>` untuk Composition API
- Nama file komponen menggunakan PascalCase (contoh: `TodoItem.vue`)
- Props dan events menggunakan kebab-case

**Git Commit Messages**
- `feat:` untuk fitur baru
- `fix:` untuk perbaikan bug
- `refactor:` untuk refactoring kode
- `docs:` untuk dokumentasi
- `style:` untuk perubahan styling
- `chore:` untuk maintenance

Contoh:
```bash
git commit -m "feat: tambah fitur filter todo berdasarkan status"
```

## 🤝 Contributing

Kontribusi sangat diterima! Silakan ikuti langkah berikut:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'feat: add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Audyari Wiyono**
- GitHub: [@Audyari](https://github.com/Audyari)
- Email: audy123ari@gmail.com

## 🙏 Acknowledgments

- [Vue.js Team](https://vuejs.org/) untuk framework yang luar biasa
- [Tailwind CSS](https://tailwindcss.com/) untuk styling yang cepat
- [Vite](https://vitejs.dev/) untuk developer experience yang amazing

---

⭐ Jangan lupa beri bintang jika proyek ini membantu Anda!