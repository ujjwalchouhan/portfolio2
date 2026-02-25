import {
  ELRIADSHRINE,
  AUCTOSELLERAPP,
  PEPSI,
  DINGG,
  KAASHIN,
  MYLONE,
} from "./projectContent";

export const FEATURED_PROJECTS = [
  {
    ...ELRIADSHRINE,
    path: "ELRIADSHRINE",
    cardBg: "#F8F9FB",
    outcome: "Reduced booking drop-offs with real-time seat selection",
    tags: ["Web", "Ticketing", "Mobile"],
    size: "large",
  },
  {
    ...AUCTOSELLERAPP,
    path: "AUCTOSELLERAPP",
    cardBg: "#F0F4FF",
    outcome: "Mobile-first seller app for high-volume auction workflows",
    tags: ["Mobile", "SaaS", "Dashboard"],
    size: "small",
  },
  {
    ...PEPSI,
    path: "PEPSI",
    cardBg: "#EEF2FF",
    outcome: "Increased deal speed by 38%",
    tags: ["Dashboard", "Enterprise", "Web"],
    size: "small",
  },
  {
    ...DINGG,
    path: "DINGG",
    cardBg: "#FAFAFA",
    outcome: "End-to-end salon ops and growth in one platform",
    tags: ["SaaS", "Mobile", "Web"],
    size: "large",
  },
  {
    ...KAASHIN,
    path: "KAASHIN",
    cardBg: "#FAFAFA",
    outcome: "Brand identity embodying Varanasi's serene essence",
    tags: ["Brand", "Logo", "Hospitality"],
    size: "large",
  },
  {
    ...MYLONE,
    path: "MYLONE",
    cardBg: "#EEF2FF",
    outcome: "Compare loan offers easily and apply quickly",
    tags: ["Web", "Fintech", "Mobile"],
    size: "small",
  },
];
