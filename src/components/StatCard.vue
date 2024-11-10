<template>
    <div
        class="p-6 rounded-2xl bg-[#1A1C22] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
        <div class="flex items-center justify-between">
            <div class="w-[60px] h-[60px] rounded-[20px] bg-[#282C35] flex items-center justify-center">
                <font-awesome-icon :icon="icon" class="h-6 w-6" :style="{ color: iconColor }" />
            </div>

            <div class="space-y-4">
                <h3 class="text-gray-400 text-lg mb-2 font-extralight">{{ title }}</h3>
                <span class="text-[32px] font-semibold text-white leading-none">${{ formattedAmount }}</span>

            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    amount: Number,
    icon: {
        type: Array,
        required: true
    },
    iconColor: {
        type: String,
        default: '#1FCB4F'
    }
})

const formattedAmount = computed(() => {
    return new Intl.NumberFormat().format(props.amount)
})
</script>