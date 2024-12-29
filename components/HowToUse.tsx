import { Card, CardContent } from "@/components/ui/card";
import { Link, Clipboard, Download, Image } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      icon: <Link className="w-8 h-8 text-red-500" />,
      title: "Copy YouTube URL",
      description:
        "Find the YouTube video you want to download the thumbnail from and copy its URL from the address bar.",
    },
    {
      icon: <Clipboard className="w-8 h-8 text-red-500" />,
      title: "Paste URL",
      description:
        "Paste the copied URL into the input field of our YouTube Thumbnail Downloader tool.",
    },
    {
      icon: <Image className="w-8 h-8 text-red-500" />,
      title: "Choose Resolution",
      description:
        "After fetching the thumbnails, select your preferred resolution from the available options.",
    },
    {
      icon: <Download className="w-8 h-8 text-red-500" />,
      title: "Download Thumbnail",
      description:
        "Click the 'Download' button to save the thumbnail image to your device in your chosen resolution.",
    },
  ];

  return (
    <Card className="mt-12 bg-white shadow-sm border dark:bg-gray-800 max-w-7xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          How to Download Youtube Thumbnail?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-red-50 dark:bg-gray-700 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HowToUse;
