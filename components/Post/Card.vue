<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200">
    <!-- Post Header -->
    <div class="flex items-center p-4">
      <img
        v-if="post.user.avatar != null"
        :src="apiEndpoint + post.user.avatar"
        :alt="post.user.username"
        class="w-8 h-8 rounded-full mr-3"
      />
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 rounded-full mr-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>

      <div class="flex-1">
        <h3 class="font-semibold text-sm">{{ post.user.username }}</h3>
      </div>
    </div>
    
    <!-- Post Image -->
    <img
      :src="apiEndpoint + post.imageUrl"
      :alt="post.caption"
      class="w-full h-96 object-cover"
    />
    
    <!-- Post Actions -->
    <PostActions
      :post="post"
      @like="$emit('like', post.id)"
      @comment="showComments = !showComments"
    />
    
    <!-- Post Caption -->
    <div class="px-4 pb-3">
      <p class="text-sm">
        <span class="font-semibold mr-2">{{ post.user.username }}</span>
        {{ post.caption }}
      </p>
    </div>
    
    <!-- Comments Section -->
    <CommentSection
      v-if="showComments"
      :post="post"
      @add-comment="$emit('comment', post.id, $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types'
import api from '~/config/api'

defineProps<{
  post: Post
}>()

defineEmits<{
  like: [postId: string]
  comment: [postId: string, text: string]
}>()

const showComments = ref(false)
const apiEndpoint = api.apiEndpoint

</script>