import { defineStore } from 'pinia'
import type { User, Post } from '~/types'

export const useUsersStore = defineStore('users', {
  state: () => ({
    searchResults: [] as User[],
    currentProfile: null as User | null,
    profilePosts: [] as Post[]
  }),

  actions: {
    async searchUsers(query: string) {
      try {
        const { data } : { data: User[] } = await $fetch('/api/users/search', {
          params: { q: query }
        })
        this.searchResults = data
      } catch (error) {
        console.error('Error searching users:', error)
      }
    },

    async fetchUserProfile(username: string) {
      try {
        const { data }: { data: { user: User, posts: Post[] } } = await $fetch(`/api/users/${username}`)
        this.currentProfile = data.user
        this.profilePosts = data.posts
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }
  }
})