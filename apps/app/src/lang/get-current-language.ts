import { useUserStore } from '@/stores/user'
import { i18n } from '.'

export function getCurrentLanguage(fallback = 'en') {
  //   const usersStore = useUserStore()

  let lang = fallback
  // add localstorage check or backend check for used language in the system

  lang = i18n.global.locale.value
  return lang
}
