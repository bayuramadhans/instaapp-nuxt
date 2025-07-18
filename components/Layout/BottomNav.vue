<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50">
    <div class="flex justify-around items-center py-2">
      <NuxtLink
        to="/"
        class="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </NuxtLink>
      
      <NuxtLink
        to="/post/create"
        class="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900"
      >
        <PlusIcon class="w-6 h-6" />
      </NuxtLink>
      
      <NuxtLink
        :to="`/profile/${authStore.user?.username}`"
        class="flex flex-col items-center p-2 text-gray-600 hover:text-gray-900"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { PlusIcon } from '@heroicons/vue/24/outline'
const authStore = useAuthStore()
</script>