<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/MenuStore'

const route = useRoute()
const router = useRouter()
const store = useMenuStore()

const id = route.params.id
const name = ref('')
const price = ref('')
const category = ref('makanan')
const isLoading = ref(false)

onMounted(() => {
    const menu = store.menus.find(item => item.id === id)
    if (menu) {
        name.value = menu.name
        price.value = menu.price
        category.value = menu.category
    } else {
        alert('Menu tidak ditemukan')
        router.push({ name: 'menu' })
    }
})

const submitForm = async () => {
    if (!name.value || !price.value) {
        alert('Nama dan harga wajib diisi!')
        return
    }

    isLoading.value = true

    await store.updateMenu(id, {
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
            <h1 class="text-2xl font-bold mb-4 text-gray-900">✏️ Edit Menu</h1>

            <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1">Nama Menu</label>
                    <input v-model="name" type="text" class="w-full border border-gray-300 rounded px-3 py-2">
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Harga</label>
                    <input v-model="price" type="number" class="w-full border border-gray-300 rounded px-3 py-2">
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Kategori</label>
                    <select v-model="category" class="w-full border border-gray-300 rounded px-3 py-2">
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                    </select>
                </div>

                <div class="flex justify-end">
                    <button type="submit"
                        class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition"
                        :disabled="isLoading">
                        {{ isLoading ? 'Menyimpan...' : 'Simpan Perubahan' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
