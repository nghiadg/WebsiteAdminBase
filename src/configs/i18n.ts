import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTrans from "translations/en.json";

// the translation
const resources = {
  en: {
    translation: enTrans,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
