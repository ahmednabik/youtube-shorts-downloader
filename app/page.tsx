"use client";

import DownloadMain from "@/components/DownloadMain";
import HowToUse from "@/components/HowToUse";
import FAQSection from "@/components/FAQSection";
import Script from "next/script";

export default function Home() {
  return (
    <div className="relative w-full max-w-[90rem] mx-auto px-4 py-8">
      {/* <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <div className="text-center my-14">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Youtube Shorts Downloader
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Download <strong>Youtube shorts</strong> in different formats for
          free.
          <br />
          Also works for <strong>youtube videos downloading</strong>.
        </p>
      </div>
      <DownloadMain />
      <HowToUse />
      <FAQSection />
    </div>
  );
}
