import type { Metadata } from "next";
import { Rajdhani as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import "./globals.css";

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
        <div className="w-full h-screen flex flex-col">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
