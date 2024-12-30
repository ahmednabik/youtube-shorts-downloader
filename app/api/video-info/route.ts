import { NextResponse } from "next/server";
import ytdl from '@distube/ytdl-core';
const fs = require("fs");
import { YouTubeError, YouTubeErrorCodes } from "@/lib/youtube/errors";


export async function POST(req: Request) {
  const agent = ytdl.createAgent(JSON.parse(fs.readFileSync("cookies.json")));
 
  try {
    const { url } = await req.json();

    if (!ytdl.validateURL(url)) {
      throw new YouTubeError(
        'Invalid YouTube URL format',
        YouTubeErrorCodes.INVALID_URL
      );
    }

    // Get video info
    const info = await ytdl.getInfo(url, { agent });

    // Filter and format the video formats
    const formats = info.formats
      .filter(format => {
        // Filter out formats without video or with only audio
        return format.qualityLabel && format.hasVideo;
      })
      .map(format => ({
        formatId: format.itag,
        qualityLabel: format.qualityLabel,
        container: format.container,
        hasAudio: format.hasAudio,
        hasVideo: format.hasVideo,
        // Convert bytes to MB and round to 2 decimal places
        size: format.contentLength 
          ? `${(parseInt(format.contentLength) / (1024 * 1024)).toFixed(2)} MB`
          : 'Unknown size',
        fps: format.fps || 0,
        // Add codec info if you need it
        codecs: format.codecs,
      }))
      // Remove duplicates based on formatId and qualityLabel combination
      .filter((format, index, self) => 
        index === self.findIndex(f => 
          f.formatId === format.formatId && 
          f.qualityLabel === format.qualityLabel
        )
      )
      // Sort by quality (highest first)
      .sort((a, b) => {
        const aQuality = parseInt(a.qualityLabel);
        const bQuality = parseInt(b.qualityLabel);
        return bQuality - aQuality;
      });

    return NextResponse.json({
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails,
      duration: info.videoDetails.lengthSeconds,
      author: info.videoDetails.author.name,
      formats: formats.filter(f => f.hasAudio), //temp fix: return format with audio and video
    });

  } catch (error: any) {
    console.error('Video info error:', {
      message: error.message,
      code: error instanceof YouTubeError ? error.code : 'UNKNOWN',
      stack: error.stack
    });

    if (error instanceof YouTubeError) {
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch video information" },
      { status: 500 }
    );
  }
}