import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "פרופ' אייל שיינר | מיילדות, גינקולוגיה ופיריון",
  description: "פרופ' אייל שיינר, מומחה למיילדות, גינקולוגיה ופיריון. קליניקה פרטית באקליפטוס 33, עומר. לזימון תור: 03-5114428.",
  icons: { icon: "/assets/logo-mark.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
