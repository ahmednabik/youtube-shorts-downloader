import { NextResponse } from "next/server";
import { getVideoInfo } from "@/lib/youtube/info";
import { validateYouTubeShortsUrl } from "@/lib/youtube/validation";
import { YouTubeError } from "@/lib/youtube/errors";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    
    // Validate URL format first
    validateYouTubeShortsUrl(url);

    // Get video info
    const videoInfo = await getVideoInfo(url);
    return NextResponse.json(videoInfo);
  } catch (error) {
    if (error instanceof YouTubeError) {
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status: 400 }
      );
    }

    console.error('Video info error:', error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}