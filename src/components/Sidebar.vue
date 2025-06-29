<!-- src/components/Sidebar.vue -->
<script setup>
import { ref } from 'vue'

const openParent = ref('')

const menus = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        submenus: [],
        path: 'dashboard'// tidak ada submenu
    },
    {
        name: 'Menu',
        key: 'menu',
        submenus: [
            { name: 'Tambah Menu', path: 'addmenu' },
            { name: 'Daftar Menu', path: 'menu' }
        ]
    },
    {
        name: 'Transaksi',
        key: 'transaksi',
        submenus: [
            { name: 'Tambah Transaksi', path: 'addtransaksi' },
            { name: 'Daftar Transaksi', path: 'transaksi' }
        ]
    },

    {
        name: 'Laporan',
        key: 'laporan',
        submenus: [],
        path: 'laporan'
    }
]


function toggleParent(key) {
    openParent.value = openParent.value === key ? '' : key
}
</script>

<template>
  <aside class="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white shadow-2xl min-h-screen fixed top-0 left-0 z-50 border-r border-gray-700">
    <!-- Header -->
    <div class="p-6 border-b border-gray-600 flex items-center gap-2">
      <svg class="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0L12.5 7.5H20L14 12L16.5 20L10 15L3.5 20L6 12L0 7.5H7.5L10 0Z"/>
      </svg>
      <h2 class="text-2xl font-bold tracking-widest text-amber-500">Vio Caffe</h2>
    </div>

    <!-- Navigation Menu -->
    <nav class="p-4 space-y-2">
      <div v-for="parent in menus" :key="parent.key" class="group">
        <!-- Direct Link -->
        <RouterLink v-if="parent.submenus.length === 0" :to="{ name: parent.path }"
          :class="[
            'flex items-center w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 hover:bg-amber-600 hover:text-white transition transform hover:scale-105 shadow',
            $route.name === parent.path ? 'bg-amber-600 border-amber-500 shadow-lg text-white' : 'text-gray-300'
          ]">
          <span class="font-medium">{{ parent.name }}</span>
        </RouterLink>

        <!-- Parent with Submenus -->
        <div v-else class="space-y-1">
          <button @click="toggleParent(parent.key)"
            class="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 hover:bg-amber-600 hover:text-white transition transform hover:scale-105 shadow focus:outline-none focus:ring-2 focus:ring-amber-400"
            :class="{ 'bg-amber-600 text-white border-amber-500': openParent === parent.key }">
            <span class="font-medium">{{ parent.name }}</span>
            <span class="transition-transform duration-200" :class="{ 'rotate-180': openParent === parent.key }">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </span>
          </button>

          <!-- Submenu Items -->
          <div v-if="openParent === parent.key" class="ml-4 space-y-1 animate-fade-in">
            <RouterLink v-for="submenu in parent.submenus" :key="submenu.path" :to="{ name: submenu.path }"
              :class="[
                'flex items-center w-full px-4 py-2 text-sm rounded-md border border-gray-600 bg-gray-800/60 hover:bg-amber-500 hover:text-white transition transform hover:translate-x-1 shadow relative',
                $route.name === submenu.path ? ' text-amber-500 ' : 'text-gray-400'
              ]">
              <span class="relative z-10">{{ submenu.name }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
      <div class="text-xs text-gray-500 text-center">© 2024 Vio Caffe</div>
    </div>
  </aside>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>

