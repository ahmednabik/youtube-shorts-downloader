import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="prose dark:prose-invert p-6">
          <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
          <p>Last updated: 31-12-2024</p>
          <p>
            Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of
            Use&quot;) carefully before using the youtube-shorts-downloader
            website (the &quot;Service&quot;) operated by YTS Downloaader
            (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Access to the Service
          </h2>
          <p>
            We reserve the right to withdraw or amend this Service, and any
            service or material we provide via the Service, in our sole
            discretion without notice. We will not be liable if for any reason
            all or any part of the Service is unavailable at any time or for any
            period.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Intellectual Property Rights
          </h2>
          <p>
            The Service and its entire contents, features, and functionality
            (including but not limited to all information, software, text,
            displays, images, video, and audio, and the design, selection, and
            arrangement thereof) are owned by YTS Downloaader, its licensors, or
            other providers of such material and are protected by United States
            and international copyright, trademark, patent, trade secret, and
            other intellectual property or proprietary rights laws.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Prohibited Uses</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance
            with these Terms. You agree not to use the Service:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              In any way that violates any applicable federal, state, local, or
              international law or regulation.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any &quot;junk mail&quot;,
              &quot;chain letter&quot;, &quot;spam&quot;, or any other similar
              solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate the Company, a Company
              employee, another user, or any other person or entity.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Changes to the Terms of Use
          </h2>
          <p>
            We may revise and update these Terms of Use from time to time in our
            sole discretion. All changes are effective immediately when we post
            them, and apply to all access to and use of the Service thereafter.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            business@youtube-shorts-downloader.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
