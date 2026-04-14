import { createApp }   from 'vue'
import { createPinia } from 'pinia'

import PrimeVue        from 'primevue/config';
import Aura            from '@primeuix/themes/nora';

import '@/styles/reset.css'
import '@/styles/main.scss'

import App             from './App.vue'
import router          from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: Aura
	}
})

app.mount('#app')
