import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="prose dark:prose-invert p-6">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p>Last updated: 31-12-2024</p>
          <p>
            Youtube Shorts Downloaader (&quot;us&quot;, &quot;we&quot;, or
            &quot;our&quot;) operates https://youtube-shorts-downloader (the
            &quot;Service&quot;). This page informs you of our policies
            regarding the collection, use, and disclosure of Personal
            Information when you use our Service.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Information Collection and Use
          </h2>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to, your name, email address, postal address, and
            phone number (&quot;Personal Information&quot;).
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Log Data</h2>
          <p>
            We collect information that your browser sends whenever you visit
            our Service (&quot;Log Data&quot;). This Log Data may include
            information such as your computer&apos;s Internet Protocol
            (&quot;IP&quot;) address, browser type, browser version, the pages
            of our Service that you visit, the time and date of your visit, the
            time spent on those pages and other statistics.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Cookies</h2>
          <p>
            Cookies are files with small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            web site and stored on your computer&apos;s hard drive. We use
            &quot;cookies&quot; to collect information. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being
            sent. However, if you do not accept cookies, you may not be able to
            use some portions of our Service.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at business@youtube-shorts-downloader.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
