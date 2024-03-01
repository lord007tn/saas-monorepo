import type { RouteRecordRaw } from 'vue-router'
import type { User } from './users'
export interface ModuleConfig {
  id: string
  name?: string
  routes: RouteRecordRaw[]
  hidden?: boolean
  preRegisterCheck?: (user: User /* permissions: Permission[]*/) => Promise<boolean> | boolean
}
