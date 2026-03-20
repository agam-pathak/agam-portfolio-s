import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Agam Pathak | Software Developer Portfolio",
  description:
    "Software developer portfolio showcasing Rahi.AI and SarthiSync case studies, architecture, and outcomes.",
  openGraph: {
    title: "Agam Pathak | Software Developer Portfolio",
    description:
      "B.Tech CSE student building practical full-stack applications with clean code and strong problem-solving.",
    url: "/",
    siteName: "Agam Pathak Portfolio",
    images: [{ url: "/og-image.svg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Pathak | Software Developer Portfolio",
    description:
      "Software developer portfolio showcasing Rahi.AI and SarthiSync case studies, architecture, and outcomes.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
