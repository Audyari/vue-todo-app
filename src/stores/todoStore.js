import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),

  getters: {
    active: (state) => state.todos.filter(todo => !todo.completed),
    completed: (state) => state.todos.filter(todo => todo.completed)
  },

  actions: {
    addTodo(title) {
      if (title.trim()) {
        this.todos.push({
          id: Date.now(),
          title: title.trim(),
          completed: false
        })
      }
    },

    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },

    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})