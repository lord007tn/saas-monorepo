import type { App } from 'vue'
import numbro from './numbro'
import dayjs from './dayjs'
export function registerPlugins(app: App): void {
  app.use(numbro)
  app.use(dayjs)
}
