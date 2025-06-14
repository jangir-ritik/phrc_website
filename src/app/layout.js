import { Archivo } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: "PHRC Lifespace Organisation",
    template: "%s | PHRC Life",
  },
  description:
    "Where healing meets humanity - A holistic healthcare ecosystem in the heart of Pune",
  keywords: [
    "healthcare",
    "hospital",
    "medical education",
    "research",
    "Pune",
    "PHRC",
    "medical institute",
  ],
  authors: [{ name: "PHRC Life" }],
  creator: "PHRC Life",
  publisher: "PHRC Lifespace Organisation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PHRC Lifespace Organisation",
    description:
      "Where healing meets humanity - A holistic healthcare ecosystem in the heart of Pune",
    url: "https://phrc.org",
    siteName: "PHRC Life",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHRC Lifespace Organisation",
    description:
      "Where healing meets humanity - A holistic healthcare ecosystem in the heart of Pune",
    creator: "@phrclife",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={archivo.className}>
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
