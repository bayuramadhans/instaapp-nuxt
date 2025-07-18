<template>
  <div class="min-h-screen bg-gray-50">
    <LayoutHeader />
    <div class="flex">
      <LayoutSidebar class="hidden md:block" />
      <main class="flex-1 md:ml-64">
        <slot />
      </main>
    </div>
    <LayoutBottomNav class="md:hidden" />
  </div>
</template>

<script setup lang="ts">
</script>