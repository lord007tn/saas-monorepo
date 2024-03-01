import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './lang'
import App from './App.vue'
import { router } from './router'
import { createHead } from '@unhead/vue'
import './style/main.scss'
import { registerComponents } from './components/register'
import { registerDirectives } from './directives/register'
import { registerViews } from './views/register'
import { registerAddons } from './addons'
import { registerPlugins } from './plugins/register'

setup()

function setup() {
  console.time('🕓 Application Loaded')
  const app = createApp(App)
  const pinia = createPinia()

  app.use(router)
  app.use(i18n)
  app.use(pinia)
  app.use(createHead())
  // register components, directives, views, addons
  registerPlugins(app)
  registerDirectives(app)
  registerComponents(app)
  registerViews(app)
  registerAddons(app)

  app.mount('#app')
  console.timeEnd('🕓 Application Loaded')
  // Prevent the browser from opening files that are dragged on the window
  window.addEventListener('dragover', (e) => e.preventDefault(), false)
  window.addEventListener('drop', (e) => e.preventDefault(), false)
}
