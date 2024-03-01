import { defineModule } from '@/utils'
import SupportOverview from './routes/support-overview.vue'

export default defineModule({
  id: 'support',
  name: 'support',
  routes: [
    {
      name: 'support-overview',
      path: '',
      component: SupportOverview
    }
  ]
})
