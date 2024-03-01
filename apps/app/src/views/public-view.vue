<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <header class="flex items-center justify-between px-9 py-7">
    <img alt="Saas monorepo" height="46" width="115" src="@/assets/images/logo.svg" />
    <v-language-selector />
  </header>
  <div class="flex min-h-[calc(100vh-98px)] items-center justify-normal">
    <slot></slot>
  </div>
</template>
