import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        works: "Works",
        source: "Source",
        welcome: "Hello, I'm a full-stack web developer based in Latvia!",
        name: "Edgar Grishin",
        position: "Full-stack developer",
        work: "Work",
        workDesc: "Here is some cool description",
        portfolio: "My portfolio",
        love: "I",
        loveDesc:
          "Games, Games development, Music, Art, Customization, Programming",
        web: "On the web",
        workspaceDesc: "Here is some cool description",
        dropmusicDesc: "Here is some cool description",
        mybooksDesc: "Here is some cool description",
        back: "Back to my works",
        notfound: "Project not found",
        footer: "© 2025 Edgar Grishin. All Rights Reserved.",
        projects: {
          workspace: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
          },
          dropmusic: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
          },
          mybooks: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
          },
          calc: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
          },
        },
      },
    },
    lv: {
      translation: {
        works: "Darbi",
        source: "Avots",
        welcome: "Labdien, esmu full-stack izstrādātājs Latvijā!",
        name: "Edgars Grišins",
        position: "Full-stack izstrādātājs",
        work: "Darbs",
        workDesc: "šeit ir apraksts",
        portfolio: "Mans portfelis",
        love: "Es",
        loveDesc:
          "Spēles, Spēļu izstrāde, Mūzika, Māksla, Pielāgošana, Programmēšana",
        web: "Tiešsaistē",
        workspaceDesc: "šeit ir apraksts",
        dropmusicDesc: "šeit ir apraksts",
        mybooksDesc: "šeit ir apraksts",
        back: "Atpakaļ pie maniem darbiem",
        notfound: "Projekts netika atrasts",
        footer: " © 2025 Edgars Grišins. Visas tiesības aizsargātas.",
        projects: {
          workspace: {
            description:
              "Markdown piezīmju lietotne ar 100+ spraudņiem, platformu neatkarīga un šifrēta datu sinhronizācija.",
          },
          dropmusic: {
            description: "Ļoti cool apraksts DropMusic projektam.",
          },
          mybooks: {
            description: "Apraksts MyBooks projektam.",
          },
          calc: {
            description: "Apraksts Calc projektam.",
          },
        },
      },
    },
  },
  lng: "lv",
  fallbackLng: "lv",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
