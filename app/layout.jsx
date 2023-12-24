import Head from "next/head";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/Themes/ThemeProvider";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={outfit.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
