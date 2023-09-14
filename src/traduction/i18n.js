import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation }
        },
        lng: 'en', // Langue par défaut
        fallbackLng: 'en', // Langue de secours si la langue souhaitée n'est pas disponible
        interpolation: {
            escapeValue: false // Permet d'ajouter des balises HTML dans les traductions
        }
    });

export default i18n;
