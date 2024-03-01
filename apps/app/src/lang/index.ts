import { createI18n, type I18nOptions } from 'vue-i18n'
import type availableLanguages from './available-languages.yaml'
import dateTimeFormats from './date-formats.yaml'
import numberFormats from './number-formats.yaml'
import enBase from './translations/en.yaml'
export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: enBase
  } as I18nOptions['messages'],
  silentTranslationWarn: true,
  dateTimeFormats,
  numberFormats
})

export type Language = keyof typeof availableLanguages

export const loadedLanguages: Language[] = ['en']
