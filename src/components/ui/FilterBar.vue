<template>
  <div class="flex space-x-2 mb-4 w-full max-w-md">
    <!-- Dropdown Filter -->
    <select
      v-model="store.filterStatus"
      class="border rounded-md px-2 py-1 flex-1"
    >
      <option value="all">Semua</option>
      <option value="active">Aktif</option>
      <option value="completed">Selesai</option>
    </select>

    <!-- Input Pencarian -->
    <input
      v-model="store.searchQuery"
      type="text"
      placeholder="Cari tugas..."
      class="border rounded-md px-2 py-1 flex-1"
    />
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todoStore'
const store = useTodoStore()
</script>
