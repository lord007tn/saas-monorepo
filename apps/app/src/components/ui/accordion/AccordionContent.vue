<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { cn } from '@/lib/shadcn'

const props = defineProps<AccordionContentProps & { class?: string }>()
</script>

<template>
  <AccordionContent
    v-bind="props"
    :class="
      cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', props.class)
    "
  >
    <div class="py-0">
      <slot />
    </div>
  </AccordionContent>
</template>
