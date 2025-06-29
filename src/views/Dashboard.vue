<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
    <p class="text-gray-600 mb-8">Selamat datang di Dashboard Vio Caffe! Ini hanya halaman placeholder.</p>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card Example 1 -->
      <div class="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 ring-1 ring-blue-300/50">
        <div class="flex items-center mb-4">
          <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 17v-2a4 4 0 00-4-4H3m0 0a4 4 0 014-4h1a4 4 0 014 4v2m0 0h6m-6 0a4 4 0 004-4V7m0 0a4 4 0 00-4-4h-1a4 4 0 00-4 4v2"></path>
          </svg>
          <h2 class="text-xl font-semibold">Statistik Penjualan</h2>
        </div>
        <p class="text-sm">Grafik dan info penjualan harian/bulanan akan ditampilkan di sini.</p>
      </div>

      <!-- Card Example 2 -->
      <div class="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 ring-1 ring-green-300/50">
        <div class="flex items-center mb-4">
          <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7"></path>
          </svg>
          <h2 class="text-xl font-semibold">Status Stok</h2>
        </div>
        <p class="text-sm">Informasi stok bahan baku cafe.</p>
      </div>

      <!-- Card Example 3 -->
      <div class="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 ring-1 ring-purple-300/50">
        <div class="flex items-center mb-4">
          <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 10h4l3 10h8l3-10H3z"></path>
          </svg>
          <h2 class="text-xl font-semibold">Transaksi Terbaru</h2>
        </div>
        <p class="text-sm">Daftar transaksi terbaru di Vio Caffe.</p>
      </div>
    </div>

    <!-- Footer Note -->
    <div class="mt-12 text-center text-gray-500 text-sm">
      Ini hanya tampilan dummy. Silakan kembangkan sesuai kebutuhan Anda.
    </div>
  </div>
</template>

<script setup>
// Masih kosong — hanya placeholder.
</script>

<style scoped>
/* Tidak perlu styling tambahan, Tailwind sudah cukup */
</style>
