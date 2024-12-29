// const ytdl = require("@distube/ytdl-core");
import ytdl from '@distube/ytdl-core';
import { YouTubeError, YouTubeErrorCodes } from './errors';

export async function downloadVideo(url: string) {
  try {
    if (!ytdl.validateURL(url)) {
      throw new YouTubeError(
        'Invalid YouTube URL format',
        YouTubeErrorCodes.INVALID_URL
      );
    }

    // First get the video info
    const info = await ytdl.getInfo(url);
    
    // Get available formats with both audio and video
    const format = ytdl.chooseFormat(info.formats, {
      quality: "highest",
      filter: 'audioandvideo'
    });

    console.log(format)

    if (!format) {
      throw new YouTubeError(
        'No suitable format found',
        YouTubeErrorCodes.FORMAT_UNAVAILABLE
      );
    }

    // Create the stream with the specific format
    return ytdl(url, {
      format: format
    });

  } catch (error: any) {
    console.error('Download error details:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });

    if (error instanceof YouTubeError) {
      throw error;
    }

    if (error.message.includes('Could not extract')) {
      throw new YouTubeError(
        'Could not process this video. It might be age-restricted or protected',
        YouTubeErrorCodes.EXTRACTION_ERROR
      );
    }

    if (error.message.includes('Status code:')) {
      throw new YouTubeError(
        'Video is unavailable or private',
        YouTubeErrorCodes.VIDEO_UNAVAILABLE
      );
    }

    throw new YouTubeError(
      'Failed to download video',
      YouTubeErrorCodes.NETWORK_ERROR
    );
  }
}