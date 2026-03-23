export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Terreiro Sagrado",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aldeiadaluz.com.br",

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
    phoneFormatted: process.env.NEXT_PUBLIC_CONTACT_PHONE_FORMATTED || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  },

  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  },

  seo: {
    defaultTitle: "Terreiro Sagrado - Aldeia da Luz",
    titleTemplate: "%s | Aldeia da Luz",
    defaultDescription:
      "Casa de Umbanda em Goiânia — espaço de fé, cura e tradição ancestral.",
    defaultKeywords: [
      "umbanda",
      "terreiro",
      "aldeia da luz",
      "espiritual",
      "goiânia",
      "medicinas ancestrais",
      "candomblé",
      "religião afro-brasileira",
    ] as string[],
  },

  images: {
    logo: "/images/uploads/aldeia-logo.jpg",
    ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://aldeiadaluz.com.br"}/images/og-image.jpg`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
