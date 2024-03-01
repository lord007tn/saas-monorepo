import numbro from 'numbro'
import type { App, Plugin } from 'vue'
const plugin: Plugin = {
  install: (app: App) => {
    app.config.globalProperties.$numbro = numbro
  }
}
export default plugin
