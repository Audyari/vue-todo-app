<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center p-6">
    <h1 class="text-3xl font-bold mb-6 text-blue-600">📝 Vue Todo App</h1>

    <!-- Form tambah todo -->
    <div class="w-full max-w-md flex space-x-2 mb-6">
      <Input
        v-model="newTodo"
        placeholder="Tulis tugas baru..."
        class="flex-1"
        @keyup.enter="addNewTodo"
      />
      <Button @click="addNewTodo">Tambah</Button>
    </div>

    <!-- 🔍 Filter dan Pencarian -->
    <FilterBar />

    <!-- Daftar todo -->
    <div class="w-full max-w-md space-y-3">
      <EmptyState
        v-if="filteredTodos.length === 0"
        message="Belum ada tugas di kategori ini 🙃"
      />

      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggle"
        @edit="saveEdit"
        @startEdit="startEdit"
        @cancelEdit="cancelEdit"
        @delete="remove"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import EmptyState from "@/components/ui/EmptyState.vue";
import TodoItem from "@/components/ui/TodoItem.vue";
import FilterBar from "@/components/ui/FilterBar.vue";

const store = useTodoStore();
const { filteredTodos } = storeToRefs(store);

const newTodo = ref("");

const addNewTodo = () => {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value);
    newTodo.value = "";
  }
};

const remove = (id) => store.deleteTodo(id);
const toggle = (id) => store.toggleTodo(id);

const startEdit = (id) => {
  store.startEdit(id); // set editing=true di store
};

const saveEdit = (id, newTitle) => {
  store.saveEdit(id, newTitle); // update title + editing=false
};

const cancelEdit = (id) => {
  store.cancelEdit(id); // editing=false tanpa ubah title
};

onMounted(() => store.loadFromLocalStorage());
</script>
