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
  <div :class="cn('rounded-lg border p-4 bg-card text-card-foreground shadow-sm', props.class)">
    <slot />
  </div>
</template>
