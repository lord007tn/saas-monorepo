<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from 'radix-vue'
import { cn } from '@/lib/shadcn'
import { buttonVariants } from '@/components/ui/button'
interface Props extends AlertDialogActionProps {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
}
const props = defineProps<Props>()
</script>

<template>
  <AlertDialogAction v-bind="props" :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')">
    <slot />
  </AlertDialogAction>
</template>
