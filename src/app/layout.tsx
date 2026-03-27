import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "@/components/PostHogProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#08111f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agam-pathak.com"),
  title: "Agam Pathak | Full-Stack Software Developer & Team Lead",
  description:
    "Agam Pathak is a software engineer specializing in building practical, full-stack AI applications like Rahi.AI and Lexora with clean architecture and localized intelligence.",
  keywords: ["Agam Pathak", "Software Developer", "Full Stack Engineer", "Next.js Developer", "AI Applications", "Rahi.AI", "SarthiSync", "Computer Science Meerut"],
  authors: [{ name: "Agam Pathak" }],
  openGraph: {
    title: "Agam Pathak | Full-Stack Software Developer & Team Lead",
    description:
      "B.Tech CSE student building high-impact full-stack applications with localized AI, clean code, and team-centric leadership.",
    url: "https://agam-pathak.com",
    siteName: "Agam Pathak Portfolio",
    images: [{ url: "/og-image.svg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Pathak | Full-Stack Software Developer & Team Lead",
    description:
      "Detailed portfolio showcasing AI travel orchestration, document intelligence, and fleet operations systems.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/brand-logo.svg",
    shortcut: "/brand-logo.svg",
    apple: "/brand-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        <PostHogProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
            <PageTransition>
              {children}
            </PageTransition>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}
