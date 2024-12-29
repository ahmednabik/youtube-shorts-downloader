export class YouTubeError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = 'YouTubeError';
  }
}

export enum YouTubeErrorCodes {
  INVALID_URL = 'INVALID_URL',
  VIDEO_UNAVAILABLE = 'VIDEO_UNAVAILABLE',
  NETWORK_ERROR = 'NETWORK_ERROR',
  FORMAT_UNAVAILABLE = 'FORMAT_UNAVAILABLE',
  EXTRACTION_ERROR = 'EXTRACTION_ERROR'
}