import { createApp }   from 'vue'
import { createPinia } from 'pinia'
import {
  definePreset,
  updateSurfacePalette,
} from '@primeuix/themes';

import PrimeVue        from 'primevue/config';
import SelectedTheme   from '@primeuix/themes/aura';

import '@/styles/reset.css'
import '@/styles/main.scss'

import App             from './App.vue'
import router          from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: definePreset(SelectedTheme, {
      semantic: {
        primary: {
          50:  '{indigo.0}',
          100: '{indigo.100}',
          200: '{indigo.200}',
          300: '{indigo.300}',
          400: '{indigo.400}',
          500: '{indigo.500}',
          600: '{indigo.600}',
          700: '{indigo.700}',
          800: '{indigo.800}',
          900: '{indigo.900}',
          950: '{indigo.950}'
        },
        colorScheme: {
          dark: {
            primary: {
              inverseColor: '{zinc.950}',
            },
            text: {
              color: '{neutral.100}',
              mutedColor: '{neutral.400}',
            },
            content: {
              background: '{neutral.800}',
            },
          },
        },
        transitionDuration: 0,
      }
    }),
    options: {
      darkModeSelector: '.p-app-dark',
    }
  }
})

app.mount('#app')