<template>
  <div class="min-h-screen bg-color text-white">
    <SideMenu 
      :is-open="isSideMenuOpen" 
      @toggle="toggleSideMenu"
      :active-route="currentRoute"
      @route-change="handleRouteChange"
    />
    <div :class="['transition-all duration-300', 'lg:ml-64']">
      <TopBar @toggle-menu="toggleSideMenu" />
      <main class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            v-for="card in cards" 
            :key="card.title"
            v-bind="card"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideMenu from './components/SideMenu.vue'
import TopBar from './components/TopBar.vue'
import StatCard from './components/StatCard.vue'

const isSideMenuOpen = ref(false)
const currentRoute = ref('Dashboard')

const cards = [
  {
    title: 'Balance',
    amount: 41210,
    icon: ['fas', 'wallet'],
    color: 'emerald'
  },
  {
    title: 'Income',
    amount: 41210,
    icon: ['fas', 'piggy-bank'],
    color: 'yellow'
  },
  {
    title: 'Expenses',
    amount: 41210,
    icon: ['fas', 'credit-card'],
    color: 'blue'
  },
  {
    title: 'Savings',
    amount: 41210,
    icon: ['fas', 'dollar-sign'],
    color: 'green'
  }
]


const toggleSideMenu = () => {
  isSideMenuOpen.value = !isSideMenuOpen.value
}

const handleRouteChange = (route) => {
  currentRoute.value = route
  if (window.innerWidth < 1024) { 
    isSideMenuOpen.value = false
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    isSideMenuOpen.value = false
  }
})
</script>

<style scoped>
.bg-color {
  background-color: #282C35;
}
</style>