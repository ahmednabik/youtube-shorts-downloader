import { NextResponse } from "next/server";
import { downloadVideo } from "@/lib/youtube/download";
import { YouTubeError } from "@/lib/youtube/errors";

// export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
  
    const { stream, contentLength } = await downloadVideo(url);
    
    // // Add error handling for the stream
    // stream.on('error', (error: any) => {
    //   console.error('Stream error:', error);
    // });

    // // Add debug logging for stream events
    // stream.on('data', (chunk: any) => {
    //   console.log('Received chunk of size:', chunk.length);
    // });

    // stream.on('end', () => {
    //   console.log('Stream ended');
    // });
    
    // Create a standard web Response with the stream
    const response = new Response(stream as any);
    
    // Set the headers
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'video/mp4');
    headers.set('Content-Disposition', 'attachment; filename="youtube-shorts.mp4"');
    headers.set('Content-Length', contentLength);

    // Return a new Response with the stream and headers
    return new Response((stream as any), {
      headers,
      status: 200,
    });
  } catch (error: any) {
    console.error('Download route error:', {
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
      { error: "An unexpected error occurred while downloading" },
      { status: 500 }
    );
  }
}