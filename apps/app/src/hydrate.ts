import { onDehydrateAddons, onHydrateAddons } from './addons'
import { getCurrentLanguage } from './lang/get-current-language'
import { setLanguage } from './lang/set-language'
import { useAppStore } from './stores/app'
import { useAuthStore } from './stores/auth'
import { useUserStore } from './stores/user'
import { useCommonStore } from './stores/common'
type GenericStore = {
  $id: string
  hydrate?: () => Promise<void>
  dehydrate?: () => Promise<void>

  [key: string]: any
}
export function useStores(stores = [useAppStore, useAuthStore, useUserStore, useCommonStore]): GenericStore[] {
  return stores.map((useStore) => useStore()) as GenericStore[]
}
export async function hydrate(): Promise<void> {
  const appStore = useAppStore()
  const authStore = useAuthStore()
  const userStore = useUserStore()
  const commonStore = useCommonStore()

  if (appStore.isHydrated) return
  if (appStore.isHydrating) return

  appStore.isHydrating = true

  try {
    await authStore.hydrate()
    await userStore.hydrate()

    const lang = getCurrentLanguage()

    // Check if user role changed if so rehydrate all needed stores and rehydrate all addons
    const currentUser = userStore.currentUser

    if (currentUser) {
      await onHydrateAddons()
    }
    // Set Default Language
    /**
     * @NOTE
     * We may send request to backend to get user saved settings and set language
     * according to them
     */
    await setLanguage(lang)
    await commonStore.hydrate()
  } catch (err: any) {
    appStore.error = err
  } finally {
    appStore.isHydrating = false
  }
  appStore.isHydrated = true
}
export async function dehydrate(stores = useStores()): Promise<void> {
  const appStore = useAppStore()

  if (appStore.isHydrated === false) return

  for (const store of stores) {
    await store.dehydrate?.()
  }

  await onDehydrateAddons()

  appStore.isHydrated = false
}
