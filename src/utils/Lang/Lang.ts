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
        workDesc: `I am an independent full-stack developer from Latvia with a passion for creating innovative web solutions – from concept development and design to a finished product. Currently, I specialize in working with modern technologies like Golang (using the Gin/Echo frameworks) and React (in a TypeScript environment). In my daily work, I strive to find ways in which code can solve real problems and make people's lives more convenient.
        When I’m not busy with programming or design, I enjoy expressing myself creatively – whether by experimenting with various new technologies or customizing applications and projects to give them a unique style. My goal is to continue growing and creating projects that inspire and help others.`,
        portfolio: "My portfolio",
        love: "I",
        loveDesc:
          "Games, Games development, Music, Art, Customization, Programming",
        web: "On the web",
        workspaceDesc:
          "An interactive, fully web-based “workspace” application featuring productivity and communication tools.",
        dropmusicDesc:
          "An atmospheric music player featuring drag-and-drop functionality, custom audio effects, and a highly tunable visual interface.",
        mybooksDesc:
          "A book discovery tool integrating the Google Books API to browse literature and view detailed descriptions.",
        weatherDesc:
          "A dynamic weather dashboard featuring real-time API integration and an immersive, weather-reactive UI.",
        sublimeDesc:
          "A comprehensive full-stack web platform combining real-time uptime monitoring and live cryptocurrency tracking capabilities.",
        back: "Back to my works",
        notfound: "Page Not Found",
        notfoundDesc:
          "The page you're looking for doesn't exist or has been moved.",
        backHome: "Go Home",
        viewWorks: "View Works",
        footer: "© 2026 Edgar Grishin. All Rights Reserved.",
        projects: {
          workspace: {
            description:
              "This application provides a convenient “workspace” environment where users can switch between various tools and customize the interface to their needs. The backend is built with Go (Gin, WebSocket, MySQL, Redis, JWT cookie, OAuth) and the frontend uses Next.js, React, TypeScript, Redux, Supabase and Tailwind CSS.",
            stack: "Stack",
            source: "Source",
          },
          dropmusic: {
            description:
              "An interactive music player focused on creating an atmospheric listening experience. Users can drag-and-drop MP3 files and fully customize their environment by controlling audio effects like reverb and distortion, alongside visual settings such as background styles and opacity. The project features a unique rain-sound layer that can be blended with the music, providing total control over the audio-visual aesthetics.",
            stack: "Stack",
            source: "Source",
          },
          sublime: {
            description:
              "SublimeHub is a full-stack web platform that combines critical service monitoring with real-time financial data analysis. The project consists of two core modules: a high-precision Uptime Monitor for tracking server availability, and a Crypto Tracker providing live market data via WebSockets. Built with Go (Echo) and Next.js, it showcases a modern architecture (Modular Monolith & Feature-based), secure JWT/OAuth2 authentication, and a seamless user experience.",
            stack: "Stack",
            source: "Source",
          },
          mybooks: {
            description:
              "My first project in the React ecosystem, serving as a foundation for learning component-based architecture and external data integration. The application utilizes the Google Books API to search for and display detailed book information, including authors, descriptions, and cover art. This project was key to mastering React fundamentals, state management, and asynchronous data fetching.",
            stack: "Stack",
            source: "Source",
          },
          weather_react: {
            description:
              "An interactive weather application providing real-time data via the OpenWeatherMap API. The standout feature is its dynamic user interface—background visualizations automatically adapt to current weather conditions (e.g., snowing, raining, or cloudy), creating an immersive user experience. Built with a focus on accurate data representation (wind speed, temperature fluctuations, status) and a modern, responsive design.",
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
            description: "My easy to setup Neovim(LazyVim) dot files. ",
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
        mainProjects: "Main Projects",
        oldProjects: "Old/Archive Projects",
      },
    },
    //LV
    lv: {
      translation: {
        works: "Darbi",
        setup: "Konfigurācija",
        source: "Avots",
        welcome: "Labdien, esmu full-stack izstrādātājs Latvijā!",
        name: "Edgars Grišins",
        position: "Full-stack izstrādātājs",
        work: "Darbs",
        workDesc: `Esmu neatkarīgs full-stack izstrādātājs no Latvijas, kura aizraušanās ir veidot inovatīvus tīmekļa risinājumus – no idejas izstrādes un dizaina līdz gatavam produktam. Šobrīd specializējos darbā ar modernām tehnoloģijām, piemēram, Golang (ar Gin/Echo frameworku) un React (TypeScript vidē). Ikdienā cenšos atrast veidus, kā kods var atrisināt reālas problēmas un padarīt cilvēku dzīvi ērtāku.
        Kad neesmu aizņemts ar programmēšanu vai dizainu, man patīk radoši izpausties – gan eksperimentējot ar dažādām jaunām tehnoloģijām, gan pielāgojot lietotnes un projektus, lai piešķirtu tiem unikālu stilu. Mans mērķis ir turpināt attīstīties un radīt projektus, kas iedvesmo un palīdz citiem.`,
        portfolio: "Mans portfelis",
        love: "Es",
        loveDesc:
          "Spēles, Spēļu izstrāde, Mūzika, Māksla, Pielāgošana, Programmēšana",
        web: "Tiešsaistē",
        workspaceDesc:
          "Interaktīva, pilnībā tīmeklī balstīta “darbvietas” lietojumprogramma ar produktivitātes un saziņas rīkiem.",
        dropmusicDesc:
          "Atmosfērisks mūzikas atskaņotājs ar drag-and-drop funkcionalitāti, audio efektiem un pielāgojamu vizuālo vidi.",
        mybooksDesc:
          "Grāmatu meklēšanas rīks, kas integrējas ar Google Books API, lai pārlūkotu literatūru un detalizētus aprakstus.",
        weatherDesc:
          "Dinamisks laikapstākļu panelis ar reāllaika API integrāciju un imersīvu, laikapstākļiem pielāgotu lietotāja saskarni.",
        sublimeDesc:
          "Visaptveroša full-stack tīmekļa platforma, kas apvieno reāllaika uptime monitoringu un live kriptovalūtu izsekošanas iespējas.",
        back: "Atpakaļ pie maniem darbiem",
        notfound: "Lapa nav atrasta",
        notfoundDesc: "Lapa, kuru meklējat, neeksistē vai ir pārvietota.",
        backHome: "Uz sākumlapu",
        viewWorks: "Skatīt darbus",
        footer: " © 2026 Edgars Grišins. Visas tiesības aizsargātas.",
        projects: {
          workspace: {
            description:
              "Šī lietojumprogramma nodrošina ērtu “darba telpas” vidi, kur lietotāji var pārslēgties starp dažādiem rīkiem un pielāgot saskarni savām vajadzībām. Sistēmas aizmugure ir veidota, izmantojot Go (Gin, WebSocket, MySQL, Redis, JWT cookie, OAuth), un front-end izmanto Next.js, React, TypeScript, Redux, Supabase un Tailwind CSS.",
            stack: "Steks",
            source: "Avots",
          },
          sublime: {
            description:
              "SublimeHub ir full-stack tīmekļa platforma, kas apvieno kritiski svarīgu pakalpojumu uzraudzību ar reāllaika finanšu datu analīzi. Projekts sastāv no diviem galvenajiem moduļiem: augstas precizitātes Uptime Monitor, kas seko līdzi serveru pieejamībai, un Crypto Tracker, kas nodrošina tiešraides tirgus datus, izmantojot WebSockets. Izstrādāts, izmantojot Go (Echo) un Next.js, tas demonstrē modernu arhitektūru (Modular Monolith & Feature-based), drošu JWT/OAuth2 autentifikāciju un plūstošu lietotāja pieredzi.",
            stack: "Steks",
            source: "Avots",
          },
          dropmusic: {
            description:
              "Interaktīvs mūzikas atskaņotājs, kas fokusējas uz atmosfērisku klausīšanās pieredzi. Lietotāji var vienkārši 'drag-and-drop' savus MP3 failus un pilnībā pielāgot vidi, kontrolējot tādus audio efektus kā reverb un distortion, kā arī vizuālos iestatījumus — fonus un elementu caurspīdīgumu. Projekts ietver unikālu lietus skaņas slāni, ko var miksēt ar mūziku, nodrošinot pilnīgu kontroli pār audio-vizuālo estētiku.",
            stack: "Steks",
            source: "Avots",
          },
          weather_react: {
            description:
              "Interaktīva laikapstākļu lietojumprogramma, kas nodrošina reāllaika datus, izmantojot OpenWeatherMap API. Projekta galvenā iezīme ir dinamiska lietotāja saskarne — fona vizualizācijas automātiski pielāgojas pašreizējiem laikapstākļiem (piemēram, sniegs, lietus vai mākoņi), radot imersīvu pieredzi. Izstrādāts ar fokusu uz precīzu datu attēlošanu (vēja ātrums, temperatūras svārstības, statuss) un modernu, responsīvu dizainu.",
            stack: "Steks",
            source: "Avots",
          },
          mybooks: {
            description:
              "Mans pirmais projekts React ekosistēmā, kas kalpoja kā pamats darbam ar komponentu arhitektūru un ārējiem datu avotiem. Lietojumprogramma izmanto Google Books API, lai meklētu un parādītu detalizētu informāciju par grāmatām, tostarp autorus, aprakstus un vāku attēlus. Izstrādes laikā tika apgūti React pamati, stāvokļa pārvaldība (state management) un asinhronas datu ielādes principi.",
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
              "Mani viegli konfigurējamie Neovim(LazyVim) dot faili. ",
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
        mainProjects: "Galvenie projekti",
        oldProjects: "Arhīva/Vecie projekti",
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
