import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";
import { PageShell } from "@/components/page-shell";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MARJOKI | Finnish xylitol pastilles",
    template: "%s | MARJOKI",
  },
  description: siteConfig.description,
  openGraph: {
    title: "MARJOKI",
    description: siteConfig.description,
    images: ["/brand/cutouts/logo-title.webp"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${fredoka.variable} antialiased`}>
        <Providers>
          <SiteHeader />
          <PageShell>{children}</PageShell>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
