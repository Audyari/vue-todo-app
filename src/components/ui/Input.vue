<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  type: { type: String, default: 'text' },
  placeholder: String,
})
defineEmits(['update:modelValue'])
</script>
