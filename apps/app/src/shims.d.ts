import type numbro from 'numbro'
import _dayjs, { tz } from 'dayjs'
import duration from 'dayjs/plugin/duration'
declare module 'vue' {
  interface ComponentCustomProperties {
    $numbro(num?: number): numbro.Numbro
    $dayjs: typeof _dayjs & {
      duration: typeof duration
      tz: typeof tz
    }
  }
}
declare module '*.md' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.yaml' {
  const value: Record<string, any>
  export default value
}

declare module '*.json' {
  const value: Record<string, any>
  export default value
}
