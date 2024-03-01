export interface SnackbarRaw {
  id?: string
  title: string
  text?: string
  type?: 'info' | 'success' | 'warning' | 'error'
  icon?: string | null
  persist?: boolean
  dialog?: boolean
}

export interface Snackbar extends SnackbarRaw {
  readonly id: string
  readonly timestamp: number
}
