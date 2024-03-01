import type { ModuleConfig } from '@/types'

export function defineModule<T extends ModuleConfig>(config: T): T {
  return config
}
