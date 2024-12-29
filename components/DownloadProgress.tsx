"use client";

import { Progress } from "@/components/ui/progress";
import type { DownloadProgress } from "@/lib/types";

interface DownloadProgressProps {
  progress: DownloadProgress;
}

export function DownloadProgress({ progress }: DownloadProgressProps) {
  const formatBytes = (bytes: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB"];
    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
  };

  return (
    <div className="space-y-2">
      <Progress value={progress.percentage} />
      <div className="text-sm text-muted-foreground">
        {formatBytes(progress.downloaded)} / {formatBytes(progress.total)}
      </div>
    </div>
  );
}
