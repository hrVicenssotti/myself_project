import resourcesBackend from 'i18next-resources-to-backend';
import chainedBackend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next';
import httpBackend from 'i18next-http-backend';
import i18n from 'i18next';

const localResources = {};

i18n.use(chainedBackend)
    .use(initReactI18next)
    .init({
        lng: 'pt-BR',
        fallbackLng: 'pt-BR',
        load: 'currentOnly',
        ns: ['global'],
        defaultNS: 'global',
        backend: {
            backends: [httpBackend, resourcesBackend(localResources)],
            backendOptions: [
                {
                    loadPath: '/locales/{{lng}}/{{ns}}.json',
                },
            ],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
