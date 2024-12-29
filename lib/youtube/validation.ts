import { YouTubeError, YouTubeErrorCodes } from './errors';

export function validateYouTubeShortsUrl(url: string): string {
  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(pattern);
  
  if (!match) {
    throw new YouTubeError(
      'Invalid YouTube Shorts URL. Please provide a valid YouTube Shorts URL.',
      YouTubeErrorCodes.INVALID_URL
    );
  }
  
  return match[4]; // Returns the video ID
}