/** @type {import('zudoku').ZudokuConfig} */
import CenteredImage from './src/CenteredImage';
import CustomCodeBlock from './src/CustomCodeBlock';
import {MultilangCodeTab} from './src/MultilangCodeTab';
import {ExperimentalBanner} from "./src/ExperimentalBanner";
import {TagTrackingPill, SmartphoneTrackingPill} from "./src/TrackingPill";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "zudoku/ui/Tabs";

const config = {
  topNavigation: [
    { id: "intro", label: "General" },
    { id: "guides", label: "Guides" },
    { id: "mobile", label: "Mobile SDK" },
    { id: "api", label: "Web API" },
  ],
  catalog: {
    navigationId: "catalog",
    label: "Rest API",
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
        label: "About Mobile SDKs",
        items: ["mobile/aboutmobilesdks/introduction"]
      },
      {
        type: "category",
        label: "Nextome Localization SDK",
        items: [
          {
            type: "doc",
            label: "Introduction",
            id: "mobile/localization/introduction"
          },
          {
            type: "doc",
            label: "Setting up",
            id: "mobile/localization/setting-up"
          },
          {
            type: "doc",
            label: "Android Setting-up",
            id: "mobile/localization/android-setting-up"
          },
          {
            type: "doc",
            label: "iOS Setting-up",
            id: "mobile/localization/ios-setting-up"
          },
          {
            type: "doc",
            label: "Basic features",
            id: "mobile/localization/basic-features"
          },
          {
            type: "category",
            label: "Other features",
            items: [
              {
                type: "doc",
                label: "Events",
                id: "mobile/localization/other-features/events"
              },
              {
                type: "doc",
                label: "Force venue",
                id: "mobile/localization/other-features/force-venue"
              },
              {
                type: "doc",
                label: "Initial resources",
                id: "mobile/localization/other-features/initial-resources"
              },
              {
                type: "doc",
                label: "Navigation",
                id: "mobile/localization/other-features/navigation"
              },
              {
                type: "doc",
                label: "Venue Data",
                id: "mobile/localization/other-features/venue-data"
              },
              {
                type: "doc",
                label: "Override Settings",
                id: "mobile/localization/other-features/override-settings"
              },
              {
                type: "doc",
                label: "Use in background",
                id: "mobile/localization/other-features/use-background"
              },
            ]
          }
        ]
      },
      {
        type: "category",
        label: "Nextome Proximity SDK",
        icon: "flask-conical",
        items: [
          {
            type: "doc",
            label: "Introduction",
            id: "mobile/proximity/introduction"
          },
          {
            type: "doc",
            label: "Android Setting-up",
            id: "mobile/proximity/android-setting-up"
          },
          {
            type: "doc",
            label: "iOS Setting-up",
            id: "mobile/proximity/ios-setting-up"
          },
          {
            type: "doc",
            label: "Basic features",
            id: "mobile/proximity/basic-features"
          },
          {
            type: "doc",
            label: "Interaction model",
            id: "mobile/proximity/interaction-model"
          },
        ]
      },
      {
        type: "category",
        label: "Nextome Map View",
        items: [
          {
            type: "doc",
            label: "Introduction",
            id: "mobile/mapview/introduction"
          },
          {
            type: "doc",
            label: "Android setting-up",
            id: "mobile/mapview/android-setting-up"
          },
          {
            type: "doc",
            label: "iOS setting-up",
            id: "mobile/mapview/ios-setting-up"
          },
          {
            type: "category",
            label: "Usage",
            items: [
              {
                type: "doc",
                label: "The Controller",
                id: "mobile/mapview/usage/controller"
              }, 
              {
                type: "doc",
                label: "Initialize",
                id: "mobile/mapview/usage/initialize"
              }, 
              {
                type: "doc",
                label: "Events",
                id: "mobile/mapview/usage/events"
              },     
              {
                type: "doc",
                label: "Tiles",
                id: "mobile/mapview/usage/manage-tiles"
              },          
              {
                type: "doc",
                label: "Layers",
                id: "mobile/mapview/usage/manage-layers"
              },    
              {
                type: "doc",
                label: "Markers",
                id: "mobile/mapview/usage/manage-markers"
              },          
              {
                type: "doc",
                label: "Enums",
                id: "mobile/mapview/usage/enums"
              }
            ]
          },
          {
            type: "doc",
            label: "Complete Example",
            id: "mobile/mapview/example"
          }
        ]
      },
    ],
    api:[
      {
        type: "link",
        label: "Andromeda",
        href: "andromeda-api",
      },
      {
        type: "link",
        label: "Nextostats",
        href: "stats-api",
      }
    ]
  },
  apis: [
    {
      type: "url",
      input: "https://dev.api.nextome.dev/v3/api-docs",
      navigationId: "andromeda-api"
    },
    {
      type: "file",
      input: "apis/nextostats.json",
      navigationId: "stats-api"
    }
  ],
  redirects: [{ from: "/", to: "/introduction/index" }, { from: "mobile", to: "/mobile/localization/introduction" }],
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
    components: { CenteredImage, SmartphoneTrackingPill, TagTrackingPill, Tabs, TabsContent, TabsList, TabsTrigger, CustomCodeBlock, ExperimentalBanner, MultilangCodeTab},
  },
  page: {
    logo: {
      pageTitle: "Nextome Documentation",
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
  },
  metadata: {
    title: "Nextome Documentation",
    description: "Documentation for Nextome system, technology and APIs",
    logo: "https://nextome.com/documents/20125/0/logo.svg/b5b78aec-f915-7bec-bf67-da9ab302bb63",
    favicon: "https://nextome.com/myfavicon.ico",
    applicationName: "Nextome"
  }
};

export default config;
