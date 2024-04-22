import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My Awsome Blog",
    template: "%s - My Awsome Blog",
  },
  description: "Come read my awesome blog, you'll love it!",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <main className="container mx-auto flex-1 p-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
