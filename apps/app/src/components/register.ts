import { type App } from 'vue'
import Spinner from './v-spinner.vue'
import LanguageSelector from './v-language-selector.vue'

export function registerComponents(app: App): void {
  app.component('VSpinner', Spinner)
  app.component('VLanguageSelector', LanguageSelector)
}
