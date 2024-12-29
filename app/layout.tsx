import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Shorts Downloader",
  description: "Download YouTube Shorts videos in your preferred quality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
        <Toaster />
        <footer className="py-6 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                Terms of Use
              </Link>
              <Link
                href="/about-us"
                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                About Us
              </Link>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} YTTDownloader. All rights reserved.
            </p>
          </div>
        </footer>
        {/* <Script
          defer
          data-domain="youtubethumbnail-downloader.com"
          src="https://plausible.ahmednabik.com/js/script.js"
        />
        <Script id="plausible-setup">
          {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
          `}
        </Script> */}
      </body>
    </html>
  );
}
