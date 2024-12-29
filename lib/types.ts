export interface VideoQuality {
  label: string;
  value: string;
  resolution: string;
}

export interface VideoInfo {
  title: string;
  thumbnail: string;
  qualities: VideoQuality[];
  videoId: string;
}

export interface DownloadProgress {
  percentage: number;
  downloaded: number;
  total: number;
}