// src/i18n.js
import { createI18n } from 'vue-i18n'
import transaltion_en from './en'
import transaltion_km from './km'

// Define messages for each locale
const messages = {
  en: transaltion_en,
  km: transaltion_km
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n