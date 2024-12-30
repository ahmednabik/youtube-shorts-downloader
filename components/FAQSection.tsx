import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I download YouTube Shorts videos to my device?",
      answer:
        "Our YouTube Shorts video downloader makes it simple to save Shorts directly to your phone, tablet, or computer. Just paste the Shorts URL into our converter tool, select your preferred quality and format, and download your favorite vertical videos in seconds – no registration required.",
    },
    {
      question:
        "What's the maximum quality available when saving YouTube Shorts?",
      answer:
        "Our Shorts video saver supports downloading in the highest quality available, up to 1080p HD resolution. You can choose between different quality options to balance between video resolution and file size, ensuring your downloaded short-form content looks great on any device.",
    },
    {
      question: "Is it safe to use an online YouTube Shorts downloader?",
      answer:
        "Yes, our YouTube Shorts video grabber is completely secure and web-based, requiring no software installation. We use HTTPS encryption to protect your data and don't store any personal information. Unlike risky third-party apps, our platform provides a safe way to save Shorts videos.",
    },
    {
      question: "Can I download YouTube Shorts on my mobile phone?",
      answer:
        "Absolutely! Our mobile-friendly Shorts video converter works seamlessly on both Android and iOS devices. Whether you're using Safari, Chrome, or any other mobile browser, you can easily save viral Shorts content for offline viewing on your smartphone.",
    },
    {
      question:
        "Do I need to install any additional software to download YouTube Shorts?",
      answer:
        "No, our online YouTube Shorts extractor works directly in your browser without any downloads or plugins. It's a convenient web-based solution for saving short-form videos, eliminating the need for potentially harmful third-party applications or software installations.",
    },
    {
      question: "How do I save multiple YouTube Shorts at once?",
      answer:
        "Our batch YouTube Shorts downloader feature lets you save multiple vertical videos simultaneously. Simply enter multiple Shorts URLs, and our tool will process them in parallel, saving you time when downloading collections of short-form content for offline viewing or content creation.",
    },
  ];

  return (
    <Card className="mt-12 bg-white shadow-sm border dark:bg-gray-800 max-w-7xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
