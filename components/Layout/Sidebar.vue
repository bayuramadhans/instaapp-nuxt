<template>
  <aside class="fixed left-0 top-16 h-full w-64 bg-white border-r border-gray-300 z-40">
    <nav class="p-4">
      <ul class="space-y-2">
        <li>
          <NuxtLink
            to="/"
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <HomeIcon class="w-6 h-6 mr-3" />
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/post/create"
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <PlusIcon class="w-6 h-6 mr-3" />
            Create Post
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="`/profile/${authStore.user?.username}`"
            class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { HomeIcon, PlusIcon } from '@heroicons/vue/24/outline'
const authStore = useAuthStore()
</script>