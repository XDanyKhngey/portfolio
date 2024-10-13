import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import kh from './locales/kh.json';

const messages = {
  en,
  kh
};

const i18n = createI18n({
  locale: 'kh', // set default locale
  fallbackLocale: 'kh', // set fallback locale
  messages
});

export default i18n;