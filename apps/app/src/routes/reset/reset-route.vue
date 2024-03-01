<script setup lang="ts">
import { Loader2 as LoaderSpinner } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { storeToRefs } from 'pinia'
import { router } from '@/router'

const authStore = useAuthStore()
const { t } = useI18n()
const { isLoading } = storeToRefs(authStore)
const formSchema = toTypedSchema(
  z
    .object({
      password: z.string().min(8),
      passwordConfirmation: z.string().min(8)
    })
    .refine((val) => val.password === val.password, {
      message: t('passwords_do_not_match')
    })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  // await authStore.forget({ username: values.email })
  if (authStore.isAuthenticated) {
    router.replace({ name: 'home-overview' })
  }
})
</script>
<template>
  <public-view>
    <div class="flex min-h-[calc(100vh-396px)] w-full items-center justify-center">
      <form class="max-w-xs" @submit.prevent="onSubmit">
        <div class="w-full max-w-xs self-center pb-11 text-center">
          <h1 class="pb-2 text-4xl font-extrabold">{{ t('did_you_forget_password') }}</h1>
          <p class="font- pb-2 text-sm text-muted-foreground">{{ t('enter_your_email_to_reset') }}</p>
          <label class="bg-transparent text-xs text-destructive" :class="[!authStore.isLoading && authStore.error ? 'block' : 'hidden']"
            >{{ authStore.error?.code ? t(authStore.error?.code) : authStore.error?.message }}
          </label>
        </div>
        <div class="flex flex-col gap-5">
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>{{ t('password') }}</FormLabel>
              <FormControl>
                <Input type="password" :placeholder="t('enter_your_password')" v-bind="componentField" />
              </FormControl>
              <FormMessage name="password" />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
              <FormLabel>{{ t('confirm_password') }}</FormLabel>
              <FormControl>
                <Input type="password" :placeholder="t('enter_your_password')" v-bind="componentField" />
              </FormControl>
              <FormMessage name="confirmPassword" />
            </FormItem>
          </FormField>
          <Button :disabled="isLoading">
            <LoaderSpinner v-if="isLoading" class="mr-2 size-4 animate-spin" />
            <span>{{ t('continue') }}</span>
          </Button>
        </div>
      </form>
    </div>
  </public-view>
</template>
