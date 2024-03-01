<script setup lang="ts">
import { PaginationNext, type PaginationNextProps, useForwardProps } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<PaginationNextProps>(), {
  asChild: true
})
const forwarded = useForwardProps(props)
</script>

<template>
  <PaginationNext v-bind="forwarded">
    <Button class="h-10 w-10 p-0" variant="outline">
      <slot>
        <ChevronRight class="text-muted-foreground h-4 w-4" />
      </slot>
    </Button>
  </PaginationNext>
</template>
