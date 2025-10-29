import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    filterStatus: "all", // 🔍 filter: all | active | completed
    searchQuery: "", // 🔎 kata kunci pencarian
  }),

  getters: {
    active: (state) => state.todos.filter((todo) => !todo.completed),
    completed: (state) => state.todos.filter((todo) => todo.completed),

    // ✅ hasil filter + pencarian
    filteredTodos: (state) => {
      let list = state.todos;

      // filter berdasarkan status
      if (state.filterStatus === "active") {
        list = list.filter((todo) => !todo.completed);
      } else if (state.filterStatus === "completed") {
        list = list.filter((todo) => todo.completed);
      }

      // filter berdasarkan pencarian
      if (state.searchQuery.trim() !== "") {
        list = list.filter((todo) =>
          todo.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }

      return list;
    },
  },

  actions: {
    addTodo(title) {
      if (title.trim()) {
        this.todos.push({
          id: Date.now(),
          title: title.trim(),
          completed: false,
          editing: false,
        });
        this.saveToLocalStorage();
      }
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.saveToLocalStorage();
    },

    toggleTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    },

    startEdit(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.editing = true;
    },

    saveEdit(id, newTitle) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo && newTitle.trim()) {
        todo.title = newTitle.trim();
        todo.editing = false;
        this.saveToLocalStorage();
      }
    },

    cancelEdit(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.editing = false;
    },

    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    loadFromLocalStorage() {
      const data = localStorage.getItem("todos");
      if (data) {
        try {
          this.todos = JSON.parse(data);
        } catch (e) {
          console.error("Gagal parsing localStorage:", e);
        }
      }
    },
  },
});
