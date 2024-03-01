<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/shadcn'
import { useI18n } from 'vue-i18n'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ref } from 'vue'
import { watchEffect } from 'vue'
import dayjs from 'dayjs'
const { t } = useI18n()
const props = defineProps<{
  defaultValue?: number
  modelValue?: number
  class?: HTMLAttributes['class']
}>()
const transformStringToTimeObject = (seconds: number) => {
  const timeString = dayjs.duration(seconds, 'seconds').format('mm:ss')
  const [minutes, secs] = timeString.split(':')
  if (minutes && secs) {
    return { minutes: minutes, seconds: secs }
  } else {
    return { minutes: '00', seconds: '00' }
  }
}
const emits = defineEmits<{
  (e: 'update:modelValue', payload: number): void
}>()
const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
})

const time = ref<{ minutes: string; seconds: string }>(transformStringToTimeObject(modelValue.value ?? 0))

watchEffect(() => {
  modelValue.value = dayjs
    .duration({
      minutes: parseInt(time.value.minutes, 10),
      seconds: parseInt(time.value.seconds, 10)
    })
    .asSeconds()
})
</script>

<template>
  <div class="relative">
    <div v-bind="$attrs" :class="cn('flex w-full gap-4 max-w-64 items-center justify-between', props.class)">
      <div class="flex w-1/2 flex-col space-y-2">
        <div class="text-sm font-medium">{{ t('minutes') }}</div>
        <Select v-model="time.minutes">
          <SelectTrigger>
            <SelectValue :placeholder="t('minutes')" />
          </SelectTrigger>
          <SelectContent class="max-h-48">
            <SelectGroup>
              <SelectLabel>{{ t('minutes') }}</SelectLabel>
              <SelectItem class="cursor-pointer" :value="'00'">
                {{ $numbro(0).format('00') }}
              </SelectItem>
              <SelectItem v-for="m in 60" :key="m" class="cursor-pointer" :value="$numbro(m).format('00')">
                {{ $numbro(m).format('00') }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex w-1/2 flex-col space-y-2">
        <div class="text-sm font-medium">{{ t('seconds') }}</div>
        <Select v-model="time.seconds">
          <SelectTrigger>
            <SelectValue :placeholder="t('seconds')" />
          </SelectTrigger>
          <SelectContent class="max-h-48">
            <SelectGroup>
              <SelectLabel>{{ t('seconds') }}</SelectLabel>
              <SelectItem class="cursor-pointer" :value="'00'">
                {{ $numbro(0).format('00') }}
              </SelectItem>
              <SelectItem v-for="s in 60" :key="s" class="cursor-pointer" :value="$numbro(s).format('00')">
                {{ $numbro(s).format('00') }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>
