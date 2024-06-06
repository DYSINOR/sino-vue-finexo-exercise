// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  en: {
    welcome: 'Welcome',
    message: 'Hello World'
  },
  km: {
    welcome: 'សូមស្វាគម',
    message: 'ជម្រាប់សួរពិភពលោក!'
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n