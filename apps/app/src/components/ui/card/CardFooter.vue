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
  <div :class="cn('pt-0', props.class)">
    <slot />
  </div>
</template>
