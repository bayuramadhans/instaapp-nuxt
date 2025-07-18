<template>
    <div class="flex items-center space-x-2 px-3">
        <button @click="$emit('like')" class="p-2 hover:bg-gray-100 rounded-full">
            <HeartIcon class="w-6 h-6 text-gray-500" />
        </button>
        <button @click="$emit('comment')" class="p-2 hover:bg-gray-100 rounded-full">
            <ChatBubbleOvalLeftIcon class="w-6 h-6 text-gray-500" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { HeartIcon } from "@heroicons/vue/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/vue/24/outline";
</script>