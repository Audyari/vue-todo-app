import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos') || '[]')
  }),

  getters: {
    active: (state) => state.todos.filter(todo => !todo.completed),
    completed: (state) => state.todos.filter(todo => todo.completed)
  },

  actions: {
    // Tambah todo baru
    addTodo(title) {
      if (title.trim()) {
        this.todos.push({
          id: Date.now(),
          title: title.trim(),
          completed: false,
          editing: false
        })
        this.saveToLocalStorage()
      }
    },

    // Hapus todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.saveToLocalStorage()
    },

    // Ubah status selesai/belum
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
        this.saveToLocalStorage()
      }
    },

    // ✏️ Masuk ke mode edit
    startEdit(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) todo.editing = true
    },

    // 💾 Simpan hasil edit
    saveEdit(id, newTitle) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo && newTitle.trim()) {
        todo.title = newTitle.trim()
        todo.editing = false
        this.saveToLocalStorage()
      }
    },

    // ❌ Batalkan mode edit
    cancelEdit(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) todo.editing = false
    },

    // 🔄 Simpan otomatis ke localStorage
    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
