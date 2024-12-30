"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, LoaderCircle, Play, Youtube } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Arrow from "../public/arrow.svg";
import Image from "next/image";
import { DownloadProgress } from "./DownloadProgress";

interface VideoFormat {
  formatId: string;
  qualityLabel: string;
  container: string;
  hasAudio: boolean;
  hasVideo: boolean;
  size: string;
  fps: number;
}

interface VideoInfo {
  title: string;
  thumbnail: [{ url: string; width: number; height: number }];
  duration: string;
  author: string;
  formats: VideoFormat[];
}

export default function DownloadMain() {
  const [url, setUrl] = useState("");
  const [downloading, setDownloading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [progressBar, setProgressBar] = useState<number>(0);
  const [totalBytes, setTotalBytes] = useState<number>(0);
  const [loadedBytes, setloadedBytes] = useState<number>(0);

  const handleDownload = async () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a YouTube URL",
        variant: "destructive",
      });
      return;
    }

    try {
      setDownloading(true);
      setProgressBar(0); // Reset progress
      setloadedBytes(0); // Reset loaded bytes

      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url,
          formatId: selectedFormat,
        }),
      });

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const contentLength = response.headers.get("Content-Length");
      console.log("Content Length on DownloadMain", contentLength);
      const totalSize = contentLength ? parseInt(contentLength, 10) : 0;
      console.log("totalSize on DownloadMain", totalSize);
      setTotalBytes(totalSize);
      console.log("totalBytes state on DownloadMain", totalBytes);

      const reader = response.body?.getReader();
      const chunks = [];
      let receivedBytes = 0;

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        chunks.push(value);
        receivedBytes += value.length;
        setloadedBytes(receivedBytes);

        // Calculate progress
        const progress = totalSize ? (receivedBytes / totalSize) * 100 : 0;
        setProgressBar(progress);
      }

      // Create and download blob
      const blob = new Blob(chunks);
      const videoUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = "video.mp4";
      a.click();
      URL.revokeObjectURL(videoUrl);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };

  const handleFetchInfo = async () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a YouTube URL",
        variant: "destructive",
      });
      return;
    }

    try {
      setFetching(true);
      const response = await fetch("/api/video-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to fetch video info");
      }

      const info = await response.json();
      setVideoInfo(info);
      // Automatically select the highest quality format
      if (info.formats.length > 0) {
        setSelectedFormat(info.formats[0].formatId);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setFetching(false);
    }
  };

  return (
    <Card className="bg-gray-900 shadow-sm border dark:bg-gray-800 max-w-7xl mx-auto min-h-[192px]">
      <CardContent className="p-6 w-full mx-auto items-center justify-center text-center">
        <div className="flex flex-col md:flex-row gap-3 ">
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste YouTube video URL here..."
            className="flex-1 py-2 bg-white text-gray-800"
          />
          <Button
            type="submit"
            onClick={handleFetchInfo}
            className="bg-white hover:bg-white/90 text-black px-6 font-extrabold"
          >
            {!fetching ? (
              <>
                <Download className="mr-2 h-4 w-4" />
                Fetch Video
              </>
            ) : (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                Fetching...
              </>
            )}
          </Button>
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        {!videoInfo && (
          <Image
            alt="Youtube thumbnail downloader"
            src={Arrow}
            className="absolute left-4 xl:left-28 top-74 size-40 animate-arrow hidden md:block"
          />
        )}

        {videoInfo && (
          <div className="mt-8">
            <Tabs defaultValue="360p" className="w-full">
              <TabsList className="w-full justify-start h-auto flex-nowrap overflow-x-auto lg:flex-wrap gap-1 bg-gray-700 dark:bg-gray-600 p-1 rounded-lg">
                {videoInfo?.formats.map((format) => (
                  <TabsTrigger
                    key={format.formatId}
                    value={format.qualityLabel}
                    className="data-[state=active]:bg-gray-300 data-[state=active]:text-black px-4 rounded-lg data-[state=active]:shadow-lg transition-all"
                  >
                    {format.qualityLabel} - {format.container} ({format.size})
                  </TabsTrigger>
                ))}
              </TabsList>
              {videoInfo.formats.map((format) => (
                <TabsContent
                  key={format.formatId}
                  value={format.qualityLabel}
                  className="mt-4"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center items-center bg-gray-800 dark:bg-gray-900 rounded-lg border border-gray-700 dark:border-gray-600 p-4 h-[600px]">
                      <div className="relative w-full h-full bg-gray-700 dark:bg-gray-600 group">
                        <Image
                          src={
                            videoInfo.thumbnail[videoInfo.thumbnail.length - 1]
                              ?.url
                          }
                          fill
                          className="object-cover rounded-lg"
                          alt={`YouTube thumbnail - ${format.qualityLabel} quality`}
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full p-4 bg-red-600">
                            <Play className="w-8 h-8 text-white" fill="white" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 pb-4 pt-16 px-4 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-lg text-left">
                          <h3 className="text-white text-2xl font-bold line-clamp-2">
                            {videoInfo.title}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1">
                            By: {videoInfo.author} -{" "}
                            {formatDuration(Number(videoInfo.duration))}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between w-full">
                      {downloading && (
                        <DownloadProgress
                          progress={{
                            percentage: progressBar,
                            downloaded: loadedBytes,
                            total: totalBytes,
                          }}
                        />
                      )}
                      {!downloading && (
                        <Button
                          className="bg-white hover:bg-white text-black"
                          onClick={handleDownload}
                        >
                          {!downloading ? (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </>
                          ) : (
                            <>
                              <LoaderCircle className="mr-2 h-4 w-4" />
                              Downloading...
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}
