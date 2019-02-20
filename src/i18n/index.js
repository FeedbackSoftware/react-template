import i18n                 from 'i18next';
import LanguageDetector     from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en, es }           from './languages';
import { authActions }      from '../state/ducks/auth';

const configurei18n = (store) => {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .on('languageChanged', (lng) => {
      store.subscribe(() => {
        const { auth } = store.getState();
        const language = lng.split('-')[0];

        if (auth.logged && language !== auth.language) {
          store.dispatch(authActions.setLanguage({ language }));
        }
      });
    })
    .init({
      fallbackLng: 'en',
      // have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',
      debug: true,
      interpolation: {
        escapeValue: false, // not needed for react!!
      },
      react: {
        wait: true,
      },
      resources: {
        en,
        es,
      },
    });
};

export default configurei18n;
