import { shallowRef, type App } from 'vue'
import { getModules, registerModules } from './modules'

const addons = {
  modules: shallowRef([])
}
const onHydrateCallbacks: (() => Promise<void>)[] = []
const onDehydrateCallbacks: (() => Promise<void>)[] = []

export function registerAddons(app: App): void {
  const modules = getModules()

  const { registeredModules, onHydrateModules, onDehydrateModules } = registerModules(modules)

  onHydrateCallbacks.push(onHydrateModules)
  onDehydrateCallbacks.push(onDehydrateModules)
}

export async function onHydrateAddons() {
  await Promise.all(onHydrateCallbacks.map((onHydrate) => onHydrate()))
}

export async function onDehydrateAddons() {
  await Promise.all(onDehydrateCallbacks.map((onDehydrate) => onDehydrate()))
}
