import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const pixelFont = localFont({
  src: [
    {
      path: './fonts/Pixeled.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-pixel'
})

export const metadata: Metadata = {
  title: "Ammaar Dev | Backend Developer",
  description: "Portfolio of Mochammad Ammmaar Fauzaan, a Backend Developer specializing in Node.js, Express, NestJS, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", pixelFont.className)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
