import { cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'focus:ring-ring inline-flex items-center rounded border p-1.5 text-sm font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent',
        'outline-success': 'bg-success/20 text-success hover:bg-success/10 border-transparent',
        'outline-warning': 'bg-warning/20 text-warning hover:bg-warning/10 border-transparent',
        'outline-destructive': 'bg-destructive/20 text-destructive hover:bg-destructive/10 border-transparent',
        outline: 'text-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)
