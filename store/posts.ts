import { defineStore } from 'pinia'
import type { Post, Comment } from '~/types'
import { useAuthStore } from './auth'
import api from '~/config/api'
import camelcaseKeys from 'camelcase-keys';

const apiEndpoint = api.apiEndpoint

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    page: 1,
    limit: 10,
    authToken: useAuthStore().token,
    loading: false
  }),

  actions: {
    async fetchPosts() {
      this.loading = true
      try {
        const data: any = await $fetch(apiEndpoint + '/api/posts?page=' + this.page + '&limit=' + this.limit, {
            headers: {
                'Authorization': `Bearer ${this.authToken}`
            }
        })
        if (data.data.data.length === 0) {
          console.log('No more posts to load')
          return
        }else{
            this.posts.push(...camelcaseKeys(data.data.data, { deep: true }))
        }
        console.log('Fetched posts:', this.posts)
        this.page += 1
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        this.loading = false
      }
    },

    async addPost(postData: Post) {
      this.loading = true
      try {
        const data: any = await $fetch(apiEndpoint + `/api/posts`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.authToken}`
          },
          body: { postData }
        })
        
        if (data.success == true) {
            this.posts.push(camelcaseKeys(data.post, { deep: true }))
        }
      } catch (error) {
        console.error('Error adding post:', error)
      } finally {
        this.loading = false
      }
    },

    async likePost(postId: string) {
      try {
        await $fetch(`/api/posts/${postId}/like`, {
          method: 'POST'
        })
        
        const post = this.posts.find(p => p.id === postId)
        if (post) {
          post.isLiked = !post.isLiked
          post.likesCount += post.isLiked ? 1 : -1
        }
      } catch (error) {
        console.error('Error liking post:', error)
      }
    },

    async addComment(postId: string, text: string) {
      try {
        const { data } : { data: Comment } = await $fetch(apiEndpoint + `/api/posts/${postId}/comment`, {
          method: 'POST',
          body: { text }
        })
        
        const post = this.posts.find(p => p.id === postId)
        if (post) {
          // push comment to the post's comments array
          post.comments.push(data)
        }
      } catch (error) {
        console.error('Error adding comment:', error)
      }
    }
  }
})