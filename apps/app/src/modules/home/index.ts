import { defineModule } from '@/utils'
import HomeOverview from './routes/home-overview.vue'
export default defineModule({
  id: 'home',
  name: 'home',
  routes: [
    {
      name: 'home-overview',
      path: '',
      component: HomeOverview
    }
  ],
})
