<template>
    <div :class="[
        'fixed left-0 top-0 h-full w-64 bg-side transition-transform duration-300 ease-in-out z-50',
        !isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
    ]">
        <div class="p-6">
            <div class="flex items-center space-x-2 mb-8">
                <img src="../assets/Logo.svg" alt="Jetos" class="h-8" />
            </div>

            <nav class="space-y-2">
                <button v-for="item in menuItems" :key="item.title" @click="handleClick(item.title)" :class="[
                    'flex items-center space-x-3 w-full p-3 rounded-lg transition-colors text-sm relative',
                    activeRoute === item.title
                        ? 'text-[#1FCB4F]'
                        : 'text-gray-400 hover:text-[#1FCB4F] hover:text-white'
                ]">
                    <font-awesome-icon :icon="item.icon" class="h-5 w-5" />
                    <span>{{ item.title }}</span>
                    <div v-if="activeRoute === item.title"
                        class="absolute -right-6 top-1/2 -translate-y-1/2 w-2 h-8 bg-yellow-500 rounded-l-lg" />
                </button>
            </nav>
        </div>
    </div>
    <div v-if="isOpen" @click="$emit('toggle')" class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
</template>

<script setup>
const props = defineProps({
    isOpen: Boolean,
    activeRoute: String
})

const emit = defineEmits(['route-change'])

const menuItems = [
    { title: 'Dashboard', icon: ['fas', 'table-columns'] },
    { title: 'Transactions', icon: ['fas', 'receipt'] },
    { title: 'Wallet', icon: ['fas', 'wallet'] },
    { title: 'Analytics', icon: ['fas', 'chart-column'] },
    { title: 'Personal', icon: ['fas', 'user'] },
    { title: 'Message', icon: ['fas', 'message'] },
    { title: 'Setting', icon: ['fas', 'gear'] }
]

const handleClick = (route) => {
    emit('route-change', route)
}
</script>

<style scoped>
.bg-side {
    background-color: #1A1C22;
}
</style>