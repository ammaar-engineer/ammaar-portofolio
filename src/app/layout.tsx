import ShapeGrid from "@/components/ShapeGrid";
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
  title: "Ammaar Dev | Web developer",
  description: "Portfolio of Mochammad Ammmaar Fauzaan, a Web developer specializing in Node.js, Express, NestJS, and modern web technologies.",
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
          <div className="fixed w-screen h-screen z-0">
            <ShapeGrid 
              speed={0.5}
              squareSize={40}
              direction='diagonal' // up, down, left, right, diagonal
              borderColor="#00000029"
              hoverFillColor='#4c4a4a'
              shape='square' // square, hexagon, circle, triangle
              hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
              direction="down"
              hoverColor="#222222"
              size={40}
              shape="square"
            />
          </div>
        <TooltipProvider>
          <div className="z-4">
            {children}
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
