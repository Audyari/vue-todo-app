<template>
  <label class="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      v-model="checked"
      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <span><slot /></span>
  </label>
</template>

<script setup>
const checked = defineModel()
</script>
