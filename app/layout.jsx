import "./globals.css";
import Providers from "./providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import DockNav from "@/components/magic/DockNav";
import CartDrawer from "@/components/cart/CartDrawer";
import ScrollProgress from "@/components/shared/ScrollProgress";

import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL(
    "https://ebook-store.vercel.app"
  ),

  title: {
    default: "E-Book Store",
    template:
      "%s | E-Book Store",
  },

  description:
    "Premium ebook learning platform.",

  keywords: [
    "ebooks",
    "education",
    "learning",
    "reading",
    "books",
  ],

  openGraph: {
    title: "E-Book Store",
    description:
      "Premium ebook platform",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <Providers>
          <CursorGlow />

          <ScrollProgress /> {/* Add ScrollProgress here */}

          <CartDrawer />

          <DockNav />

          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}