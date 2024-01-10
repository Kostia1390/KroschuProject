import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
         translation: { 
        "learnProgram.title": "Learning Program",
        "test.title": "Tests",
        "break.title": "Break",
        "officeInfo.title": "Information about offices",
        "phoneNumber.title": "Phone number",
        "busSchedule.title": "Bus Schedule",
        "settings.title": "Settings",
        "settings.language": "Change the language",




      }
    },
      ua: { 
        translation: { 
          "learnProgram.title": "Навчальна програма",
          "test.title": "Тести",
          "break.title": "Перерва",
          "officeInfo.title": "Інформація про кабінети",
          "phoneNumber.title": "Номер телефону",
          "busSchedule.title": "Розклад автобусів",
          "settings.title": "Налаштування",
          "settings.language": "Змінити Мову",






        }
      },
      de: { 
        translation: { 
          "learnProgram.title": "Lehrplan",
          "test.title": "Tests",
          "break.title": "Brechen",
          "officeInfo.title": "Informationen zu Büros",
          "phoneNumber.title": "Telefonnummer",
          "busSchedule.title": "Busfahrplan",
          "settings.title": "Einstellungen",
          "settings.language": "Ändere die Sprache",






        }
      },
    },
    lng: 'ua', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;