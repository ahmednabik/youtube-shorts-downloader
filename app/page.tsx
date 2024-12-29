"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Youtube } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      // Check if the response is ok
      if (!response.ok) {
        // Handle error responses (which will be JSON)
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "youtube-shorts.mp4";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a);

      toast({
        title: "Success",
        description: "Video downloaded successfully",
      });
    } catch (error: any) {
      console.error("Download error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to download video",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-2xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Youtube className="h-8 w-8 text-red-500" />
            <h1 className="text-4xl font-bold">Shorts Downloader</h1>
          </div>
          <p className="text-muted-foreground">
            Download YouTube Shorts videos easily
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="Paste YouTube Shorts URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleDownload} disabled={loading}>
                <Download className="mr-2 h-4 w-4" />
                {loading ? "Downloading..." : "Download"}
              </Button>
            </div>
          </div>
        </Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>This tool is for educational purposes only.</p>
        </footer>
      </div>
    </main>
  );
}
