import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scoutly",
  description: "Uniting Hockey Players and Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
