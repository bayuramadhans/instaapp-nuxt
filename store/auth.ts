import { defineStore } from 'pinia'
import type { User, AuthState } from '~/types'
import api from '~/config/api'

const apiEndpoint = api.apiEndpoint

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        const data : any = await $fetch(apiEndpoint + '/api/login', {
            method: 'POST',
            body: { username, password }
        })
        
        this.user = data.user
        this.token = data.token
        this.isAuthenticated = true
        await navigateTo('/')
      } catch (error) {
        throw error
      }
    },

    async register(userData: {
      name: string
      username: string
      email: string
      password: string
    }) {
      try {
        const data: any = await $fetch(apiEndpoint + '/api/register', {
          method: 'POST',
          body: userData
        })
        
        this.user = data.user
        this.token = data.token
        this.isAuthenticated = true
        
        await navigateTo('/')
      } catch (error) {
        throw error
      }
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      navigateTo('/signin')
    }
  },
  persist: true,
})