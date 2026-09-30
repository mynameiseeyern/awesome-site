import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource-variable/caveat";
import "./globals.css";

// Fonts ship with the build (no Google Fonts request at runtime): Geist from the geist package,
// Caveat from Fontsource. Both expose a CSS variable / family that globals.css maps into --font-sans and --font-hand.
const geist = GeistSans;

export const metadata: Metadata = {
  metadataBase: new URL("https://eeyernng.com"),
  title: "Ee Yern Ng",
  description:
    "Principal Product Designer in Sydney. I design products end to end, then write the React that ships them.",
  openGraph: {
    title: "Ee Yern Ng",
    description: "Product designer who ships the code. Design systems, enterprise flows, and the copy in between.",
    url: "https://eeyernng.com",
    siteName: "Ee Yern Ng",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFBF9" },
    { media: "(prefers-color-scheme: dark)", color: "#191919" },
  ],
};

// Runs before paint so a saved theme never flashes. Kept tiny and dependency-free on purpose.
const themeInit = `(function(){try{var t=localStorage.getItem('eyn-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}document.documentElement.classList.add('js')})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
