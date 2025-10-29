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

      <Card
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex justify-between items-center"
      >
        <!-- Mode biasa -->
        <template v-if="!todo.editing">
          <div class="flex items-center">
            <Checkbox v-model="todo.completed" @change="toggle(todo.id)">
              <span
                :class="{ 'line-through text-gray-400': todo.completed }"
                class="ml-2"
              >
                {{ todo.title }}
              </span>
            </Checkbox>
          </div>

          <div class="flex space-x-2">
            <Button variant="secondary" @click="startEdit(todo.id)">Edit</Button>
            <Button variant="secondary" @click="remove(todo.id)">Hapus</Button>
          </div>
        </template>

        <!-- Mode edit -->
        <template v-else>
          <div class="flex items-center w-full space-x-2">
            <Input v-model="editText" placeholder="Edit tugas..." class="flex-1" />
            <Button variant="primary" @click="saveEdit(todo.id)">Simpan</Button>
            <Button variant="secondary" @click="cancelEdit(todo.id)">Batal</Button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

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
const editText = ref('')
const filter = ref('all')

// tambah todo baru
const addNewTodo = () => {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value)
    newTodo.value = ''
  }
}

// hapus & toggle
const remove = (id) => store.deleteTodo(id)
const toggle = (id) => store.toggleTodo(id)

// edit
const startEdit = (id) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    editText.value = todo.title
    store.startEdit(id)
  }
}

const saveEdit = (id) => {
  store.saveEdit(id, editText.value)
  editText.value = ''
}

const cancelEdit = (id) => {
  store.cancelEdit(id)
  editText.value = ''
}

// filter todo
const filteredTodos = computed(() => {
  if (filter.value === 'active') return store.active
  if (filter.value === 'completed') return store.completed
  return todos.value
})

// Simpan otomatis jika todos berubah (backup tambahan)
watch(
  todos,
  (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
  },
  { deep: true }
)

// 🟢 load data dari localStorage setelah komponen siap
onMounted(() => {
  store.loadFromLocalStorage()
})  
</script>
