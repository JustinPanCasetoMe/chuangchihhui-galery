import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json'

i18n.use(initReactI18next).init({
    resources:{
        en:{translation: en},
    },
    fallbackLng: 'en',
    interpolaiton:{
        escapeValue: false
    }
})

export default i18n; 