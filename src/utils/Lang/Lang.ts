import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        works: "Works",
        setup: "Setup",
        source: "Source",
        welcome: "Hello, I'm a full-stack web developer based in Latvia!",
        name: "Edgar Grishin",
        position: "Full-stack developer",
        work: "Work",
        workDesc: `I am an independent full-stack developer from Latvia with a passion for creating innovative web solutions – from concept development and design to a finished product. Currently, I specialize in working with modern technologies like Golang (using the Gin framework) and React (in a TypeScript environment). In my daily work, I strive to find ways in which code can solve real problems and make people's lives more convenient.
        When I’m not busy with programming or design, I enjoy expressing myself creatively – whether by experimenting with various new technologies or customizing applications and projects to give them a unique style. My goal is to continue growing and creating projects that inspire and help others.`,
        portfolio: "My portfolio",
        love: "I",
        loveDesc:
          "Games, Games development, Music, Art, Customization, Programming",
        web: "On the web",
        workspaceDesc: "Here is some cool description",
        dropmusicDesc: "Here is somea cool description",
        mybooksDesc: "Here is some cool description",
        back: "Back to my works",
        notfound: "Project not found",
        footer: "© 2025 Edgar Grishin. All Rights Reserved.",
        projects: {
          workspace: {
            description:
              "An interactive, fully containerized workspace application featuring productivity and communication tools with Docker support for seamless development and deployment.",
            stack: "Stack",
            source: "Source",
          },
          dropmusic: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
            stack: "Stack",
            source: "Source",
          },
          mybooks: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
            stack: "Stack",
            source: "Source",
          },
          calc: {
            description:
              "A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support",
            stack: "Stack",
            source: "Source",
          },
        },
        neovim: "Neovim",
        neovimMin: "Neovim settings",
        download: "Download",
        pwsh: "Powershell",
        pwshMin: "Powershell settings",
        linux: "Arch Linux",
        linuxMin: "Arch Linux dot-files",
        vscode: "Visual Studio Code",
        vscodeMin: "Visual Studio Code settings",
        setups: {
          neovim: {
            description:
              "My easy to setup Neovim(LazyVim) dot files.",
          },
          pwsh: {
            description:
              "Here is my PowerShell configuration. I use oh-my-posh with takuya.omp.json.",
          },
          vscode: {
            description: "My VS Code settings.json",
          },
          arch: {
            description:
              "Currently, I’m dual‑booting Windows and Arch Linux. I’m using the Hyprland tiling window manager; my configuration is based on HyDe Hyprdots with my personal adjustments.",
          },
        },
        backSetup: "Back to my setups",
        notfoundSetup: "Setup not found",
      },
    },
    lv: {
      translation: {
        works: "Darbi",
        setup: "Konfigurācija",
        source: "Avots",
        welcome: "Labdien, esmu full-stack izstrādātājs Latvijā!",
        name: "Edgars Grišins",
        position: "Full-stack izstrādātājs",
        work: "Darbs",
        workDesc: `Esmu neatkarīgs full-stack izstrādātājs no Latvijas, kura aizraušanās ir veidot inovatīvus tīmekļa risinājumus – no idejas izstrādes un dizaina līdz gatavam produktam. Šobrīd specializējos darbā ar modernām tehnoloģijām, piemēram, Golang (ar Gin framework) un React (TypeScript vidē). Ikdienā cenšos atrast veidus, kā kods var atrisināt reālas problēmas un padarīt cilvēku dzīvi ērtāku.
        Kad neesmu aizņemts ar programmēšanu vai dizainu, man patīk radoši izpausties – gan eksperimentējot ar dažādām jaunām tehnoloģijām, gan pielāgojot lietotnes un projektus, lai piešķirtu tiem unikālu stilu. Mans mērķis ir turpināt attīstīties un radīt projektus, kas iedvesmo un palīdz citiem.`,
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
              "Interaktīva, pilnībā konteinerizēta darba vides lietotne, kas piedāvā produktivitātes un komunikācijas rīkus un nodrošina Docker atbalstu, lai izstrāde un izvietošana noritētu vienmērīgi.",
            stack: "Steks",
            source: "Avots",
          },
          dropmusic: {
            description: "Ļoti cool apraksts DropMusic projektam.",
            stack: "Steks",
            source: "Avots",
          },
          mybooks: {
            description: "Apraksts MyBooks projektam.",
            stack: "Steks",
            source: "Avots",
          },
          calc: {
            description: "Apraksts Calc projektam.",
            stack: "Steks",
            source: "Avots",
          },
        },
        neovim: "Neovim",
        neovimMin: "Neovim iestatījumi",
        download: "Lejupielādēt",
        pwsh: "Powershell",
        pwshMin: "Powershell iestatījumi",
        linux: "Arch Linux",
        linuxMin: "Arch Linux dot-files",
        vscode: "Visual Studio Code",
        vscodeMin: "Visual Studio Code iestatījumi",
        setups: {
          neovim: {
            description:
              "Mani viegli konfigurējamie Neovim(LazyVim) dot faili.",
          },
          pwsh: {
            description:
              "Šeit ir mana PowerShell konfigurācija. Es izmantoju oh-my-posh ar takuya.omp.json.",
          },
          vscode: {
            description: "Mans VS Code settings.json",
          },
          arch: {
            description:
              "Pašlaik man ir dual-boot ar Windows un Arch Linux. Es izmantoju Hyprland tiling window manager; mana konfigurācija balstās uz HyDe hyprdots ar maniem personīgajiem pielāgojumiem.",
          },
        },
        backSetup: "Atpakaļ pie manām konfigurācijām",
        notfoundSetup: "Konfigurācija netika atrasta",
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
