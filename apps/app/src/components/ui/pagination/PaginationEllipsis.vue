<script setup lang="ts">
import { useAttrs } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps, useForwardProps } from 'radix-vue'
import { MoreHorizontal } from 'lucide-vue-next'
import { cn } from '@/lib/shadcn'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<PaginationEllipsisProps>()
const forwarded = useForwardProps(props)
const { class: className, ...rest } = useAttrs()
</script>

<template>
  <PaginationEllipsis
    :class="cn('w-9 h-9 flex items-center justify-center text-muted-foreground', className ?? '')"
    v-bind="{ ...forwarded, ...rest }"
  >
    <slot>
      <MoreHorizontal />
    </slot>
  </PaginationEllipsis>
</template>
