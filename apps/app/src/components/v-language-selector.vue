<script setup lang="ts">
import { setLanguage } from '@/lang/set-language'
import { ref, watchEffect } from 'vue'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const selectedLanguage = ref('en')
watchEffect(async () => {
  await setLanguage(selectedLanguage.value)
})
</script>
<template>
  <Select v-model:model-value="selectedLanguage" disabled>
    <SelectTrigger class="text-info w-24 border-none text-sm font-medium capitalize">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem class="cursor-pointer" :value="'en'"> English </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
