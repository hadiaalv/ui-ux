import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Dreamital Web",
  description:
    "Dreamital Web creates premium UI/UX design systems, digital experiences, and polished brand-led websites for modern businesses.",
  alternates: {
    canonical: "/",
  },
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-28 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}