<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <private-view :title="t('support')">
   <div>support</div>
  </private-view>
</template>
