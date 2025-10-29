<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center p-6">
    <h1 class="text-3xl font-bold mb-6 text-blue-600">📝 Vue Todo App</h1>

    <!-- Form tambah todo -->
    <div class="w-full max-w-md flex space-x-2 mb-6">
      <Input
        v-model="newTodo"
        placeholder="Tulis tugas baru..."
        class="flex-1"
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

      <Card
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex justify-between items-center"
      >
        <Checkbox v-model="todo.completed" @change="toggle(todo.id)">
          <span :class="{ 'line-through text-gray-400': todo.completed }">
            {{ todo.title }}
          </span>
        </Checkbox>
        <Button variant="secondary" @click="remove(todo.id)">Hapus</Button>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'

// import komponen UI
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Card from '@/components/ui/Card.vue'
import EmptyState from '@/components/ui/EmptyState.vue'

// store
const store = useTodoStore()
const { todos } = storeToRefs(store)

const newTodo = ref('')
const filter = ref('all')

// tambah todo baru
const addNewTodo = () => {
  store.addTodo(newTodo.value)
  newTodo.value = ''
}

// hapus & toggle
const remove = (id) => store.deleteTodo(id)
const toggle = (id) => store.toggleTodo(id)

// filter todo
const filteredTodos = computed(() => {
  if (filter.value === 'active') return store.active
  if (filter.value === 'completed') return store.completed
  return todos.value
})
</script>
