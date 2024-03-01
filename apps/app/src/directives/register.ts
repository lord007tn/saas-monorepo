import { type App } from 'vue'
import ClickOutside from './click-outside'
import Focus from './focus'
export function registerDirectives(app: App): void {
  app.directive('focus', Focus)
  app.directive('click-outside', ClickOutside)
}
