import i18n                   from 'i18next';
import LanguageDetector       from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import { en, es }             from './languages';
import { authActions }        from '../state/ducks/auth';

const configurei18n = (store) => {
  i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .on('languageChanged', (lng) => {
    store.subscribe(() => {
      const state = store.getState();
      if (state.auth.logged && lng.split('-')[0] !== state.auth.language) {
        store.dispatch(authActions.setLanguage(lng.split('-')[0]));
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
      escapeValue: false // not needed for react!!
    },
    
    react: {
      wait: true
    },
    
    resources: {
      en,
      es
    }
    
  });
};

export default configurei18n;
