import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import "./globals.css";

import Header from "@/components/root-header";
import Footer from "@/components/root-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wagone",
  description: "See the world by rail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <div className="flex flex-col w-full h-full">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
