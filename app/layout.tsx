import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/css/globals.css";
import "./styles/css/style.css";
import Navbar from "@/components/Utils/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "A list of anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
