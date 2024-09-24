import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/css/globals.css";
import "./styles/css/style.css";
import Navbar from "@/components/Utils/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

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
      <body className={`${poppins.className} bg-color-dark`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
