
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Sewa - Professional Web Development & App Development Services",
  description: "Transform your business with expert web development, mobile app development, UI/UX design, and e-commerce solutions. Digital Sewa delivers cutting-edge digital solutions.",
  applicationName: "Digital Sewa",
  metadataBase: new URL("https://digitalsewa.com/"),
  alternates: {
    canonical: "https://digitalsewa.com/",
  },
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "e-commerce",
    "digital solutions",
    "Digital Sewa",
    "software development",
    "business growth",
    "portfolio",
    "agency",
  ],
  openGraph: {
    title: "Digital Sewa - Professional Web Development & App Development Services",
    description: "Transform your business with expert web development, mobile app development, UI/UX design, and e-commerce solutions. Digital Sewa delivers cutting-edge digital solutions.",
    url: "https://digitalsewa.com/",
    siteName: "Digital Sewa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Sewa Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Sewa - Professional Web Development & App Development Services",
    description: "Transform your business with expert web development, mobile app development, UI/UX design, and e-commerce solutions. Digital Sewa delivers cutting-edge digital solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#2563eb",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://digitalsewa.com/" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        aria-label="Digital Sewa Portfolio"
      >
        <a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>
        <Header />
        <main id="content" tabIndex={-1} aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
