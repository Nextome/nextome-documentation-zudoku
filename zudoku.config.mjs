/** @type {import('zudoku').ZudokuConfig} */
import CenteredImage from './src/CenteredImage';
import {TagTrackingPill, SmartphoneTrackingPill} from "./src/TrackingPill"

const config = {
  basePath: "/nextome-documentation-zudoku",
  topNavigation: [
    { id: "intro", label: "General" },
    { id: "guides", label: "Guides" },
    { id: "mobile", label: "Mobile SDK" },
    { id: "catalog", label: "Rest API" },
  ],
  catalog: {
    navigationId: "catalog",
    label: "API Catalog",
  },
  sidebar: {
    intro: [
      {
        type: "doc",
        label: "Introduction",
        id: "introduction/index"
      },
      {
        type: "doc",
        label: "The two solutions and the tools",
        id: "introduction/solutions-and-tools"
      },
      {
        type: "doc",
        label: "Nextome Terminology",
        id: "introduction/fundamentals"
      },
    ],
    guides: [
      {
        type: "doc",
        label: "Nextome Hub Web",
        id: "guides/nextome-hub-web-guide"
      },
    ],
    mobile: [
      {
        type: "category",
        label: "Nextome Localization SDK",
        items: ["mobile/localization/introduction"]
      },
      {
        type: "category",
        label: "Nextome Proximity SDK",
        items: ["mobile/proximity/introduction"]
      },
      {
        type: "category",
        label: "Nextome Map View",
        items: ["mobile/mapview/introduction"]
      },
    ]
  },
  redirects: [{ from: "/", to: "/introduction/index" }, { from: "mobile", to: "/mobile/localization/introduction" }],
  apis: [{
    type: "url",
    input: "https://dev.api.nextome.dev/v3/api-docs",
    navigationId: "andromeda-api",
    categories: [{ label: "General", tags: ["Operational"] }],
  }],
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
  theme: {
    light:{
      "background": "0 0% 100%",
        "foreground": "222.2 84% 4.9%",
        "card": "0 0% 100%",
        "cardForeground": "222.2 84% 4.9%",
        "popover": "0 0% 100%",
        "popoverForeground": "222.2 84% 4.9%",
        "primary": "222.2 47.4% 11.2%",
        "primaryForeground": "210 40% 98%",
        "secondary": "210 40% 96.1%",
        "secondaryForeground": "222.2 47.4% 11.2%",
        "muted": "210 40% 96.1%",
        "mutedForeground": "215.4 16.3% 46.9%",
        "accent": "210 40% 96.1%",
        "accentForeground": "222.2 47.4% 11.2%",
        "destructive": "0 84.2% 60.2%",
        "destructiveForeground": "210 40% 98%",
        "border": "214.3 31.8% 91.4%",
        "input": "214.3 31.8% 91.4%",
        "ring": "222.2 84% 4.9%"
      },
      "dark": {
        "background": "222.2 84% 4.9%",
        "foreground": "210 40% 98%",
        "card": "222.2 84% 4.9%",
        "cardForeground": "210 40% 98%",
        "popover": "222.2 84% 4.9%",
        "popoverForeground": "210 40% 98%",
        "primary": "210 40% 98%",
        "primaryForeground": "222.2 47.4% 11.2%",
        "secondary": "217.2 32.6% 17.5%",
        "secondaryForeground": "210 40% 98%",
        "muted": "217.2 32.6% 17.5%",
        "mutedForeground": "215 20.2% 65.1%",
        "accent": "217.2 32.6% 17.5%",
        "accentForeground": "210 40% 98%",
        "destructive": "0 62.8% 30.6%",
        "destructiveForeground": "210 40% 98%",
        "border": "217.2 32.6% 17.5%",
        "input": "217.2 32.6% 17.5%",
        "ring": "212.7 26.8% 83.9"
      }
  },
  mdx: {
    components: { CenteredImage, SmartphoneTrackingPill, TagTrackingPill },
  },
  page: {
    logo: {
      src: {
        light: "assets/logo.png", //"https://nextome.com/documents/20125/0/logo.svg/b5b78aec-f915-7bec-bf67-da9ab302bb63",
        dark: "assets/logo-white.svg" // "https://nextome.com/documents/20125/0/logo.svg/b5b78aec-f915-7bec-bf67-da9ab302bb63"
      }
    }
  },
  search: {
    type: "pagefind",
    // Optional: Maximum number of sub results per page
    maxSubResults: 3,
    // Optional: Configure search result ranking (defaults shown below)
    ranking: {
      termFrequency: 0.8,
      pageLength: 0.6,
      termSimilarity: 1.2,
      termSaturation: 1.2,
    },
  }
};

export default config;
