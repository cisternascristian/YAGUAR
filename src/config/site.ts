import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "YAGUAR",
  description:
    "Productor musical",
  url: "https://yaguar.net",
  ogImage: "https://astro-nomy.vercel.app/og.jpg",
  links: {
    youtube: 'https://www.youtube.com/@yaguarproduciendo',
    instagram: 'https://www.instagram.com/yaguarlife',
    discord: 'https://discord.com/invite/YDXAwSkzKk',
    spotify: 'https://open.spotify.com/intl-es/artist/6GimfoNBOH2EQQSO7eDrNE'
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Redes Sociales",
    items: [
      { title: "YouTube", href: "https://www.youtube.com/@yaguarproduciendo"},
      { title: "Instagram", href: "https://www.instagram.com/yaguarlife" },
      { title: "Discord", href: "https://discord.com/invite/YDXAwSkzKk" },
      { title: "Spotify", href: "https://open.spotify.com/intl-es/artist/6GimfoNBOH2EQQSO7eDrNE" },
    ],
  },
  // {
  //   title: "Product",
  //   items: [
  //     { title: "Security", href: "#" },
  //     { title: "Customization", href: "#" },
  //     { title: "Customers", href: "#" },
  //     { title: "Changelog", href: "#" },
  //   ],
  // },
  // {
  //   title: "Docs",
  //   items: [
  //     { title: "Introduction", href: "#" },
  //     { title: "Installation", href: "#" },
  //     { title: "Components", href: "#" },
  //     { title: "Code Blocks", href: "#" },
  //   ],
  // },
];