import { z } from "zod";

export const youtubeUrlSchema = z.string().refine((url) => {
  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return pattern.test(url);
}, "Invalid YouTube Shorts URL");

export const extractVideoId = (url: string): string | null => {
  const match = url.match(/(?:\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};