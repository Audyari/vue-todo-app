<template>
  <div class="text-center py-10 text-gray-500">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: { type: String, default: 'Tidak ada data ditemukan.' },
})
</script>
