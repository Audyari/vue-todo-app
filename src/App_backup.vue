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

    <!-- Filter -->
    <div class="flex space-x-4 mb-4">
      <Button
        variant="secondary"
        @click="filter = 'all'"
        :disabled="filter === 'all'"
      >
        Semua
      </Button>
      <Button
        variant="secondary"
        @click="filter = 'active'"
        :disabled="filter === 'active'"
      >
        Aktif
      </Button>
      <Button
        variant="secondary"
        @click="filter = 'completed'"
        :disabled="filter === 'completed'"
      >
        Selesai
      </Button>
    </div>

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
        @edit="handleEdit"
        @delete="remove"
      />

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

// import komponen UI
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import Checkbox from "@/components/ui/Checkbox.vue";
import Card from "@/components/ui/Card.vue";
import EmptyState from "@/components/ui/EmptyState.vue";
import TodoItem from "@/components/ui/TodoItem.vue";

// store
const store = useTodoStore();
const { todos } = storeToRefs(store);

const newTodo = ref("");
const editText = ref("");
const filter = ref("all");

// tambah todo baru
const addNewTodo = () => {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value);
    newTodo.value = "";
  }
};

// hapus & toggle
const remove = (id) => store.deleteTodo(id);
const toggle = (id) => store.toggleTodo(id);

// edit
const startEdit = (id) => {
  const todo = todos.value.find((t) => t.id === id);
  if (todo) {
    editText.value = todo.title;
    store.startEdit(id);
  }
};

const saveEdit = (id) => {
  store.saveEdit(id, editText.value);
  editText.value = "";
};

const cancelEdit = (id) => {
  store.cancelEdit(id);
  editText.value = "";
};

// filter todo
const filteredTodos = computed(() => {
  if (filter.value === "active") return store.active;
  if (filter.value === "completed") return store.completed;
  return todos.value;
});

// Simpan otomatis jika todos berubah (backup tambahan)
watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);

// 🟢 load data dari localStorage setelah komponen siap
onMounted(() => {
  store.loadFromLocalStorage();
});

// handler edit
const handleEdit = (id, newTitle) => {
  if (newTitle) {
    // simpan hasil edit
    store.saveEdit(id, newTitle)
  } else {
    // ubah ke mode edit
    store.startEdit(id)
  }
}
</script>
