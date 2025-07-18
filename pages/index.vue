<template>
    <NuxtLayout name="default">
        <div class="max-w-2xl mx-auto py-8 px-4">
            <div v-if="postsStore.loading" class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            </div>
            
            <div v-else class="space-y-8">
            <PostCard
                v-for="post in postsStore.posts"
                :key="post.id"
                :post="post"
                @like="postsStore.likePost"
                @comment="postsStore.addComment"
            />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/store/posts'

definePageMeta({
  middleware: 'auth'
})

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPosts()
})
</script>