<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const query = ref('')

const handleSearch = () => {
  emit('search', query.value.trim())
}
</script>
<template>
  <form @submit.prevent="handleSearch" class="mb-4">
    <div class="input-group">
      <input
        v-model="query"
        type="text"
        class="form-control form-control-lg"
        placeholder="Cari film..."
      />
      <button class="btn btn-primary" type="submit">Cari</button>
    </div>
  </form>
</template>
