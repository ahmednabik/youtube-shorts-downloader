import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const BuyMeACoffee = () => {
  return (
    <div className="text-center mt-4 mb-8 flex flex-col md:flex-row items-center justify-center px-7">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        No Ads, No sign up. Just quick downloads.
      </p>
      <a href="https://www.buymeacoffee.com/ahmednk">
        <Button
          type="button"
          className="bg-white hover:bg-white/90 text-red-500 font-extrabold"
        >
          <Coffee className="mr-2 h-4 w-4" />
          Buy me a coffee
        </Button>
      </a>
    </div>
  );
};

export default BuyMeACoffee;
