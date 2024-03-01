import { type App } from 'vue'
import PrivateView from './private-view.vue'
import PublicView from './public-view.vue'
export function registerViews(app: App): void {
  app.component('PrivateView', PrivateView)
  app.component('PublicView', PublicView)
}
