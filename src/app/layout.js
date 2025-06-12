import { Archivo } from "next/font/google";

import Header from "./components/Header";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "PHRC Lifespace Organisation",
  description: "Where healing meets humanity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={archivo.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
