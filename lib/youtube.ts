import ytdl from "ytdl-core";
import { VideoInfo, VideoQuality } from "./types";

export async function getVideoInfo(url: string): Promise<VideoInfo> {
  try {
    const info = await ytdl.getInfo(url);
    
    const qualities: VideoQuality[] = ytdl.filterFormats(info.formats, 'videoandaudio')
      .map(format => ({
        label: format.qualityLabel,
        value: format.itag.toString(),
        resolution: `${format.width}x${format.height}`
      }))
      .filter((quality, index, self) => 
        index === self.findIndex((q) => q.label === quality.label)
      )
      .sort((a, b) => 
        parseInt(b.label) - parseInt(a.label)
      );

    return {
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
      qualities,
      videoId: info.videoDetails.videoId
    };
  } catch (error) {
    throw new Error("Failed to fetch video information");
  }
}

export async function getDownloadStream(url: string, quality: string) {
  return ytdl(url, {
    quality: quality,
    filter: 'videoandaudio'
  });
}