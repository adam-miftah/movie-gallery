<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})
const emit = defineEmits(['page-changed'])

const pages = computed(() => {
  const range = 1 // Diperkecil agar lebih ringkas di desktop
  const pagesArray = []

  for (let i = 1; i <= props.totalPages; i++) {
    if (
      i === 1 ||
      i === props.totalPages ||
      (i >= props.currentPage - range && i <= props.currentPage + range)
    ) {
      pagesArray.push(i)
    }
  }

  const finalPages = []
  let lastPage = 0
  for (const page of pagesArray) {
    if (lastPage) {
      if (page - lastPage > 1) {
        finalPages.push('...')
      }
    }
    finalPages.push(page)
    lastPage = page
  }

  return finalPages
})
</script>

<template>
  <nav v-if="totalPages > 1" aria-label="Page navigation">
    <ul class="pagination pagination-custom justify-content-center flex-wrap">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="emit('page-changed', currentPage - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="(page, index) in pages"
        :key="index"
        class="page-item d-none d-sm-block"
        :class="{ active: page === currentPage, disabled: page === '...' }"
      >
        <span v-if="page === '...'" class="page-link">...</span>
        <a v-else class="page-link" href="#" @click.prevent="emit('page-changed', page)">
          {{ page }}
        </a>
      </li>

      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="emit('page-changed', currentPage + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination-custom .page-item .page-link {
  background-color: #2c3034;
  border: 1px solid #495057;
  color: #adb5bd;
  margin: 0 4px;
  border-radius: 0.375rem; /* rounded corners */
  transition: all 0.2s ease-in-out;
}

.pagination-custom .page-item:not(.disabled) .page-link:hover {
  background-color: #0d6efd;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
}

.pagination-custom .page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
  transform: translateY(-2px);
}

.pagination-custom .page-item.disabled .page-link {
  background-color: #212529;
  color: #6c757d;
  border-color: #343a40;
}
</style>
