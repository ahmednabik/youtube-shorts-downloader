import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="prose dark:prose-invert p-6">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p>
            Welcome to Youtube Shorts Downloaader. We are passionate about
            creating tools that make content creators lives easier and more
            productive.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
          <p>
            Our mission is to provide simple, efficient, and user-friendly tools
            for content creators, marketers, and YouTube enthusiasts. We believe
            that everyone should have access to high-quality resources that can
            help them improve their online presence and engage with their
            audience more effectively.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">What We Do</h2>
          <p>
            At YTS Downloaader, we specialize in developing web-based tools that
            cater to the needs of the YouTube community. Our flagship product,
            the YouTube Shorts Downloader, allows users to easily access and
            download high-quality youtube shorts from youtube.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Team</h2>
          <p>
            We are a small team of dedicated developers, designers, and YouTube
            enthusiasts. Our diverse backgrounds and shared passion for
            technology and content creation drive us to continuously improve our
            tools and services.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Commitment</h2>
          <p>We are committed to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing high-quality, reliable tools</li>
            <li>Respecting user privacy and data security</li>
            <li>Continuously improving our services based on user feedback</li>
            <li>Supporting the content creator community</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>
            We value your feedback and are always here to help. If you have any
            questions, suggestions, or concerns, please dont hesitate to reach
            out to us at business@youtube-shorts-downloader.com.
          </p>
          <p>
            Thank you for choosing YTS Downloaader. We look forward to helping
            you create amazing content!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
