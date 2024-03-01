<script setup lang="ts">
import { PaginationLast, type PaginationLastProps, useForwardProps } from 'radix-vue'
import { ChevronsRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const props = withDefaults(defineProps<PaginationLastProps>(), {
  asChild: true
})
const forwarded = useForwardProps(props)
</script>

<template>
  <PaginationLast v-bind="forwarded">
    <Button class="h-10 w-10 p-0" variant="outline">
      <slot>
        <ChevronsRight class="text-muted-foreground h-4 w-4" />
      </slot>
    </Button>
  </PaginationLast>
</template>
