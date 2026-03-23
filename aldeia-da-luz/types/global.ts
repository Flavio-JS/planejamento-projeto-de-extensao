export interface MenuItem {
  title: string;
  link: string;
}

export interface HeaderContent {
  logo?: string;
  logoImage?: string;
  logoAlt?: string;
  menuItems: MenuItem[];
  ctaButton: {
    text: string;
    link: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterContent {
  logo?: string;
  logoImage?: string;
  logoAlt?: string;
  description: string;
  socialLinks: SocialLink[];
  quickLinks: MenuItem[];
  contact: {
    address: string;
    phone: string;
    email: string;
    instagram: string;
  };
  copyright: string;
}

export interface EthicsNoticeContent {
  title: string;
  description: string;
}
