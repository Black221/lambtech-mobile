import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Load translations based on user locale or default language
import enTranslations from "./translations/en.json";
import frTranslations from "./translations/fr.json";

i18n.use(initReactI18next) // Initializes i18next with React integration
	.init({
		resources: {
			en: { translation: enTranslations },
			fr: { translation: frTranslations },
		},
		lng: "fr", // Set default language (can be changed dynamically)
		fallbackLng: "en", // Fallback language in case key not found in current language
		interpolation: {
			escapeValue: false, // Set to true for safety if inserting user-generated content
		},
	});
