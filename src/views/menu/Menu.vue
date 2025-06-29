<script setup>
import { useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/MenuStore.js'
import { onMounted, ref } from 'vue'

const router = useRouter()
const store = useMenuStore()
const isLoading = ref(true)

const editMenu = (id) => {
    router.push({ name: 'editmenu', params: { id } })
}

const handleDeleteMenu = async (id) => {
  const confirmed = window.confirm("Yakin ingin menghapus menu ini?")
  if (!confirmed) return

  try {
    isLoading.value = true
    await store.deleteMenu(id)
    console.log("Menu berhasil dihapus.")
  } catch (err) {
    console.error("Gagal menghapus:", err)
  } finally {
    isLoading.value = false
  }
}


onMounted(async () => {
    isLoading.value = true
    await store.getMenus()
    isLoading.value = false
})
</script>

<template>
    <div class="min-h-screen w-full bg-gray-100 text-gray-800 p-8">
        <div class="max-w-6xl mx-auto">
            <header class="mb-6">
                <h1 class="text-3xl font-bold mb-1 text-gray-900">📋 Daftar Menu</h1>
                <p class="text-gray-600">Kelola daftar menu kafe kamu dengan mudah dan teratur.</p>
            </header>

            <div class="flex justify-end mb-4">
                <button @click="router.push({ name: 'addmenu' })"
                    class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition">
                    + Tambah Menu
                </button>
            </div>

            <!-- Loading Skeleton -->
            <div v-if="isLoading" class="space-y-6">
                <div v-for="n in 2" :key="n" class="space-y-4">
                    <div class="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
                    <div class="bg-white border border-gray-200 shadow rounded-lg">
                        <div v-for="m in 4" :key="m"
                            class="flex justify-between items-center px-6 py-4 border-b last:border-none animate-pulse">
                            <div class="w-1/4 h-4 bg-gray-200 rounded"></div>
                            <div class="w-1/4 h-4 bg-gray-200 rounded"></div>
                            <div class="w-1/4 h-4 bg-gray-200 rounded"></div>
                            <div class="w-1/4 flex justify-end space-x-2">
                                <div class="w-12 h-4 bg-gray-200 rounded"></div>
                                <div class="w-12 h-4 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Makanan & Minuman Section -->
            <div v-else>
                <!-- Makanan Section -->
                <section class="mb-10">
                    <h2 class="text-xl font-bold text-emerald-700 mb-3">🍽️ Makanan</h2>
                    <div class="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
                        <table class="min-w-full">
                            <thead class="bg-emerald-600 text-white">
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">No</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Nama</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Harga</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(menu, i) in store.makanan" :key="menu.id"
                                    class="border-b hover:bg-emerald-50 transition">
                                    <td class="px-6 py-4">{{ i + 1 }}</td>
                                    <td class="px-6 py-4">{{ menu.name }}</td>
                                    <td class="px-6 py-4">Rp{{ menu.price }}</td>
                                    <td class="px-6 py-4 space-x-2">
                                        <button @click="editMenu(menu.id)"
                                            class="px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 text-sm">
                                            Edit
                                        </button>
                                        <button @click="handleDeleteMenu(menu.id)"
                                            class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400 text-sm">Hapus</button>
                                    </td>
                                </tr>
                                <tr v-if="store.makanan.length === 0">
                                    <td colspan="4" class="px-6 py-4 text-center text-gray-500">Belum ada makanan.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Minuman Section -->
                <section>
                    <h2 class="text-xl font-bold text-emerald-700 mb-3">🧃 Minuman</h2>
                    <div class="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
                        <table class="min-w-full">
                            <thead class="bg-emerald-600 text-white">
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">No</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Nama</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Harga</th>
                                    <th class="px-6 py-3 text-left text-sm font-semibold uppercase">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(menu, i) in store.minuman" :key="menu.id"
                                    class="border-b hover:bg-emerald-50 transition">
                                    <td class="px-6 py-4">{{ i + 1 }}</td>
                                    <td class="px-6 py-4">{{ menu.name }}</td>
                                    <td class="px-6 py-4">Rp{{ menu.price }}</td>
                                    <td class="px-6 py-4 space-x-2">
                                        <button @click="editMenu(menu.id)"
                                            class="px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 text-sm">
                                            Edit
                                        </button>

                                        <button @click="handleDeleteMenu(menu.id)"
                                            class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400 text-sm">Hapus</button>
                                    </td>
                                </tr>
                                <tr v-if="store.minuman.length === 0">
                                    <td colspan="4" class="px-6 py-4 text-center text-gray-500">Belum ada minuman.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <footer class="mt-8 text-center text-xs text-gray-500">
                © 2024 Vio Caffe. Menu Management System.
            </footer>
        </div>
    </div>
</template>
