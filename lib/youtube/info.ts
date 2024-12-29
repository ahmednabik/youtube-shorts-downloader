import ytdl from 'ytdl-core';
import { VideoInfo, VideoQuality } from '../types';
import { YouTubeError, YouTubeErrorCodes } from './errors';

export async function getVideoInfo(url: string): Promise<VideoInfo> {
  try {
    if (!ytdl.validateURL(url)) {
      throw new YouTubeError(
        'Invalid YouTube URL format',
        YouTubeErrorCodes.INVALID_URL
      );
    }

    const info = await ytdl.getInfo(url);
    
    if (!info.videoDetails.availableCountries?.includes('US')) {
      throw new YouTubeError(
        'This video is not available',
        YouTubeErrorCodes.VIDEO_UNAVAILABLE
      );
    }

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

    if (qualities.length === 0) {
      throw new YouTubeError(
        'No downloadable formats found',
        YouTubeErrorCodes.PARSING_ERROR
      );
    }

    return {
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
      qualities,
      videoId: info.videoDetails.videoId
    };
  } catch (error) {
    if (error instanceof YouTubeError) {
      throw error;
    }
    
    if (error.message.includes('Status code:')) {
      throw new YouTubeError(
        'Failed to fetch video. The video might be private or unavailable.',
        YouTubeErrorCodes.VIDEO_UNAVAILABLE
      );
    }

    throw new YouTubeError(
      'Failed to fetch video information. Please try again.',
      YouTubeErrorCodes.NETWORK_ERROR
    );
  }
}