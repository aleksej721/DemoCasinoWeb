export const geoRedirects = {
  defaultGeo: "global",
  geos: {
    pl: {
      label: "Poland",
      localeHints: ["pl", "pl-PL"],
      offers: {
        register: "https://example.com/pl/register",
        login: "https://youtube.com",
        app: "https://example.com/pl/app",
        bonus: "https://example.com/pl/bonus"
      }
    },
    es: {
      label: "Spain",
      localeHints: ["es", "es-ES"],
      offers: {
        register: "https://example.com/es/register",
        login: "https://youtube.com",
        app: "https://example.com/es/app",
        bonus: "https://example.com/es/bonus"
      }
    },
    de: {
      label: "Germany",
      localeHints: ["de", "de-DE"],
      offers: {
        register: "https://example.com/de/register",
        login: "https://youtube.com",
        app: "https://example.com/de/app",
        bonus: "https://example.com/de/bonus"
      }
    },
    global: {
      label: "Global fallback",
      localeHints: [],
      offers: {
        register: "https://example.com/global/register",
        login: "https://youtube.com",
        app: "https://example.com/global/app",
        bonus: "https://example.com/global/bonus"
      }
    }
  }
};
