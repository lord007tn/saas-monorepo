<script setup lang="ts">
import { cn } from '@/lib/shadcn'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="cn('flex flex-col space-y-1.5 pb-2', props.class)">
    <slot />
  </div>
</template>
