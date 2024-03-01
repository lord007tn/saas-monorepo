import { setLanguage } from '@/lang/set-language'
import type { ServerError } from '@/types/server'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app-store',
  state: () => ({
    isSideBarOpen: true,
    isHydrated: false,
    isHydrating: false,
    error: null as ServerError | null
  }),
  actions: {
    async hydrate() {
      await setLanguage('en')
    },
    async dehydrate() {
      this.$reset()
    },
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen
    },
    closeSideBar() {
      this.isSideBarOpen = false
    },
    openSideBar() {
      this.isSideBarOpen = true
    }
  }
})
