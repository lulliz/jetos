<template>
  <div class="bg-side p-4 flex items-center justify-between">
    <h2 class="text-2xl font-bold w-full ml-4">Dashboard</h2>
    <div class="flex-1 px-4">
      <div class="max-w-md">
        <div class="relative">
          <input type="text" placeholder="Search..."
            class="w-64 bg-[#282C35] text-white pl-4 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600">
            <font-awesome-icon icon="magnifying-glass"
            class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <button class="p-2 rounded-lg hover:bg-gray-700 text-gray-400 hover:text-white">
        <font-awesome-icon icon="bell" class="h-6 w-6" />
      </button>
      <button class="w-8 h-8 rounded-full bg-gray-700" />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.bg-side {
  background-color: #1A1C22;
}
</style>