import dayjsBase from 'dayjs'
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import type { App, Plugin } from 'vue'
interface ExtendedDayjs extends dayjsBase.Dayjs {
  duration: typeof duration
}

// Export the extended dayjs instance as the custom interface

const plugin: Plugin = {
  install: (app: App) => {
    dayjsBase.extend(utc)
    dayjsBase.extend(timezone)
    dayjsBase.extend(localizedFormat)
    dayjsBase.extend(customParseFormat)
    dayjsBase.extend(duration)

    app.config.globalProperties.$dayjs = dayjsBase as ExtendedDayjs & typeof dayjsBase
  }
}
export default plugin
