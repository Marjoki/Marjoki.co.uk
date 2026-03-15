export const designTokens = {
  color: {
    bg: "#f8f7f4",
    surface: "#ffffff",
    text: "#12151d",
    textMuted: "#556070",
    border: "#dde2eb",
    brandGradient: "linear-gradient(110deg, #b8d8ff 0%, #c9f0ec 35%, #f4ecc1 70%, #f7cdb9 100%)",
    flavours: {
      strawberry: "#e98f8f",
      mango: "#f2bc74",
      raspberry: "#e7a0c8",
      blueberry: "#8db4e7",
      passionfruit: "#e8cf77",
    },
  },
  radius: {
    md: "14px",
    lg: "22px",
    xl: "30px",
  },
  motion: {
    fast: "200ms",
    base: "260ms",
  },
} as const;

export type FlavourColor = keyof typeof designTokens.color.flavours;
