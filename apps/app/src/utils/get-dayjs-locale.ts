import { i18n } from '@/lang'
const loadedLocales: { key: string; locale: any }[] = []
export function getDayJSLocale(): string | undefined {
  const currentLang = i18n.global.locale.value
  return loadedLocales.find(({ key }) => currentLang === key)?.locale
}

export async function loadDayJSLocale(lang: string) {
  const localesToTry = [lang, 'en']

  let locale

  for (const l of localesToTry) {
    try {
      const mod = await importDayJsLocale(l)
      locale = mod.default

      loadedLocales.push({ key: lang, locale })
      break
    } catch {
      continue
    }
  }

  return locale
}

export function importDayJsLocale(locale: string): Promise<any> {
  switch (locale) {
    case 'ar':
      return import('dayjs/locale/ar')
    case 'en':
      return import('dayjs/locale/en')
    default:
      return Promise.resolve()
  }
}
