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
      question: "What is a YouTube thumbnail?",
      answer:
        "A YouTube thumbnail is a static image that represents a video on YouTube. It acts as a preview and is designed to attract viewers to click on and watch the video. Thumbnails play a crucial role in a video's success on the platform.",
    },
    {
      question: "Why are YouTube thumbnails important?",
      answer:
        "YouTube thumbnails are important because they're often the first thing viewers see. A well-designed thumbnail can significantly increase click-through rates and views. They help in branding, conveying the video's content quickly, and standing out in search results and recommended video sections.",
    },
    {
      question: "What are the different YouTube thumbnail sizes?",
      answer:
        "YouTube offers thubnails in various sizes: 1280x720 pixels (HD), 640x480 pixels (SD), 480x360 pixels (High quality), 320x180 pixels (Medium quality), and 120x90 pixels (Default). The recommended size for best quality across all devices is 1280x720 pixels with a minimum width of 640 pixels. You can download thumbnail in any resolution using this free Youtube thumbnail grabber tool",
    },
    {
      question: "Can I download YouTube thumbnails without special tools?",
      answer:
        "Yes, you can manually download YouTube thumbnails by manipulating the video's URL. However, tools like this YT Thumbnail Downloader make this process much easier and provide access to all available thumbnail sizes with just a few clicks.",
    },
    {
      question: "Are there copyright concerns with using YouTube thumbnails?",
      answer:
        "Yes, there can be copyright issues when you download thumbnail from youtube and use it somewhere else without permission. The thumbnail is typically a frame from the video or a custom image created by the video owner. Using these images without permission, especially for commercial purposes, may infringe on copyright. Always seek permission or use thumbnails from your own videos.",
    },
    {
      question: "How can I create eye-catching YouTube thumbnails?",
      answer:
        "To create eye-catching YouTube thumbnails: 1) Use high-contrast, vibrant colors, 2) Include clear, readable text, 3) Show emotion or action in images, 4) Be consistent with your branding, 5) Use high-quality images, and 6) Ensure the thumbnail accurately represents your video content. Many creators use tools like Canva or Adobe Photoshop for thumbnail creation. For inspiration, you can get youtube thumbnails from your competitors and study different aspects of them to learn.",
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
