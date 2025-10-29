<template>
  <div class="flex justify-between items-center bg-white p-3 rounded-xl shadow">
    <!-- Mode biasa -->
    <template v-if="!todo.editing">
        
      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="$emit('toggle', todo.id)"
          class="w-4 h-4 cursor-pointer"
        />
        <span
          :class="{ 'line-through text-gray-400': todo.completed }"
          class="cursor-pointer select-none"
          @click="$emit('toggle', todo.id)"
        >
          {{ todo.title }}
        </span>
      </div>

      <div class="flex space-x-2">
        <Button variant="secondary" @click="$emit('edit', todo.id)"
          >Edit</Button
        >
        <Button variant="secondary" @click="$emit('delete', todo.id)"
          >Hapus</Button
        >
      </div>
    </template>

    <!-- Mode edit -->
    <template v-else>
      <div class="flex items-center w-full space-x-2">
        <Input v-model="editText" placeholder="Edit tugas..." class="flex-1" />
        <Button variant="primary" @click="saveEdit">Simpan</Button>
        <Button variant="secondary" @click="cancelEdit">Batal</Button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Checkbox from "@/components/ui/Checkbox.vue";
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";

const props = defineProps({
  todo: Object,
});
const emit = defineEmits(["toggle", "edit", "delete"]);

const editText = ref("");

// simpan
const saveEdit = () => {
  emit("edit", props.todo.id, editText.value);
  editText.value = "";
};

// batal
const cancelEdit = () => {
  props.todo.editing = false;
  editText.value = "";
};
</script>
