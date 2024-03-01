import { defineStore } from 'pinia'
import api from '@/services/api'
import type { ServerError } from '@/types/server'
export const useCommonStore = defineStore({
  id: 'common-store',
  state: () => ({
    isLoading: false,
    error: null as ServerError | null,
    message: null as string | null
  }),

  actions: {
    async hydrate() {
      this.isLoading = true
      try {
      } catch (err: any) {
        this.error = err
      }
      this.isLoading = false
    },
    async dehydrate() {
      this.$reset()
    }
  }
})
