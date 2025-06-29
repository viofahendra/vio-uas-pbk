<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/MenuStore.js'

const router = useRouter()
const store = useMenuStore()

const name = ref('')
const price = ref('')
const category = ref('makanan')

const isLoading = ref(false)

const submitForm = async () => {
  if (!name.value || !price.value) {
    alert('Nama dan harga wajib diisi!')
    return
  }

  isLoading.value = true

  await store.addMenu({
    name: name.value,
    price: price.value,
    category: category.value
  })

  isLoading.value = false
  router.push({ name: 'menu' })
}
</script>

<template>
  <div class="min-h-screen w-full bg-gray-100 text-gray-800 p-8">
    <div class="max-w-xl mx-auto bg-white shadow rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-4 text-gray-900">➕ Tambah Menu</h1>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Nama Menu</label>
          <input v-model="name" type="text" class="w-full border border-gray-300 rounded px-3 py-2" placeholder="Masukkan nama menu">
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Harga</label>
          <input v-model="price" type="number" class="w-full border border-gray-300 rounded px-3 py-2" placeholder="Masukkan harga">
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Kategori</label>
          <select v-model="category" class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="makanan">Makanan</option>
            <option value="minuman">Minuman</option>
          </select>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Menyimpan...' : 'Simpan Menu' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
