# Improve Todo Item Component

## Problem
Komponen todo item saat ini memiliki beberapa kekurangan:
1. Logika tampilan dan logika bisnis tercampur di komponen App.vue
2. Tidak reusable karena terikat dengan implementasi spesifik
3. Sulit untuk di-maintain dan di-test

## Proposed Solution
1. Ekstrak todo item menjadi komponen terpisah (`TodoItem.vue`)
2. Gunakan props dan events untuk komunikasi dengan parent
3. Tambahkan animasi untuk interaksi yang lebih baik
4. Tambahkan fitur drag & drop
5. Tambahkan konfirmasi sebelum menghapus

## Implementation Details

### Komponen Baru: `TodoItem.vue`
```vue
<template>
  <div 
    class="todo-item"
    :class="{ 'todo-item--completed': todo.completed }"
    draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    @drop="onDrop($event, todo.id)"
  >
    <div class="todo-item__content">
      <Checkbox 
        :model-value="todo.completed" 
        @update:modelValue="$emit('toggle', todo.id)"
        class="todo-item__checkbox"
      >
        <span class="todo-item__title" :class="{ 'line-through text-gray-400': todo.completed }">
          {{ todo.title }}
        </span>
      </Checkbox>
      
      <div class="todo-item__actions">
        <Button 
          variant="ghost" 
          size="sm"
          @click="$emit('edit', todo.id)"
          class="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <EditIcon class="w-4 h-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          @click="confirmDelete"
          class="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
        >
          <TrashIcon class="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
  
  <!-- Delete Confirmation Dialog -->
  <Dialog v-model:open="showDeleteDialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Hapus Tugas</DialogTitle>
        <DialogDescription>
          Apakah Anda yakin ingin menghapus tugas ini? Tindakan ini tidak dapat dibatalkan.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" @click="showDeleteDialog = false">Batal</Button>
        <Button variant="destructive" @click="handleDelete">Hapus</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TrashIcon, PencilIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['delete', 'toggle', 'edit', 'reorder'])

const showDeleteDialog = ref(false)

function confirmDelete() {
  showDeleteDialog.value = true
}

function handleDelete() {
  emit('delete', props.todo.id)
  showDeleteDialog.value = false
}

// Drag & Drop
const isDragging = ref(false)

function onDragStart() {
  isDragging.value = true
  event.dataTransfer.setData('text/plain', props.index)
  event.dataTransfer.effectAllowed = 'move'
}

function onDragEnd() {
  isDragging.value = false
}

function onDrop(event, targetId) {
  const sourceIndex = event.dataTransfer.getData('text/plain')
  emit('reorder', parseInt(sourceIndex), props.index)
}
</script>

<style scoped>
.todo-item {
  @apply p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200 group;
}

.todo-item--completed {
  @apply bg-gray-50;
}

.todo-item__content {
  @apply flex items-center justify-between;
}

.todo-item__title {
  @apply text-gray-800;
}

.todo-item__actions {
  @apply flex items-center space-x-1;
}
</style>
```

### Perubahan pada `App.vue`
1. Hapus logika render todo item
2. Gunakan komponen `TodoItem` yang baru
3. Tambahkan handler untuk event reorder

```vue
<!-- Di dalam template -->
<TodoItem
  v-for="(todo, index) in filteredTodos"
  :key="todo.id"
  :todo="todo"
  :index="index"
  @toggle="toggle"
  @edit="startEdit"
  @delete="remove"
  @reorder="handleReorder"
  class="mb-2"
/>

<!-- Di dalam script -->
function handleReorder(fromIndex, toIndex) {
  store.reorderTodos(fromIndex, toIndex)
}
```

## Benefits
1. **Code Organization** - Pemisahan yang lebih baik antara komponen
2. **Reusability** - Komponen todo item dapat digunakan di mana saja
3. **Maintainability** - Lebih mudah untuk di-maintain dan di-test
4. **UX** - Pengalaman pengguna yang lebih baik dengan animasi dan konfirmasi
5. **Accessibility** - Dukungan keyboard dan screen reader yang lebih baik

## Testing Plan
1. Unit test untuk komponen `TodoItem`
2. Test interaksi drag & drop
3. Test konfirmasi penghapusan
4. Test aksesibilitas

## Migration Steps
1. Buat komponen `TodoItem.vue`
2. Pindahkan logika terkait dari `App.vue`
3. Update `App.vue` untuk menggunakan komponen baru
4. Tambahkan test
5. Deploy dan uji di lingkungan staging

## Acceptance Criteria
- [ ] Komponen todo item dapat digunakan secara independen
- [ ] Dukungan drag & drop berfungsi dengan baik
- [ ] Konfirmasi penghapusan muncul saat menghapus todo
- [ ] Tidak ada regresi pada fungsionalitas yang ada
- [ ] Kode mengikuti konvensi yang ditetapkan

## Dependencies
- `@heroicons/vue` untuk ikon
- `vuedraggable` (opsional, jika membutuhkan fitur drag & drop yang lebih kompleks)

## Related Issues
- #123 (jika ada issue terkait)

## Screenshots/Mockups
[Opsional: Tambahkan mockup atau screenshot jika diperlukan]
