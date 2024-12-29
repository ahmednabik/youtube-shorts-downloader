import Link from "next/link";
import { SquarePlay } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <SquarePlay className="h-8 w-8 text-red-500 rotate-90" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                YT Shorts Downloader
              </span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
