import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Rubik } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | מיילדות, גינקולוגיה ופיריון`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "health",
  keywords: [
    "פרופ' אייל שיינר",
    "Eyal Sheiner",
    "מיילדות",
    "גינקולוגיה",
    "פיריון",
    "הריון בסיכון גבוה",
    "קליניקה עומר",
    "אקליפטוס 33",
  ],
  alternates: {
    canonical: "/",
    languages: { he: "/" },
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "סיכום האתר למודלי שפה" },
        { url: "/llms-full.txt", title: "סיכום מלא למודלי שפה" },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | מיילדות, גינקולוגיה ופיריון`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/assets/about-portrait.png", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | מיילדות, גינקולוגיה ופיריון`,
    description: SITE_DESCRIPTION,
    images: ["/assets/about-portrait.png"],
  },
  icons: { icon: "/assets/logo-mark.png" },
  other: {
    "tdm-reservation": "0",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={rubik.className}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
