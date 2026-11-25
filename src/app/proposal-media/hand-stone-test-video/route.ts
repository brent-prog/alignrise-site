import { handStoneVideoBase64 } from "@/content/proposal-media/hand-stone-test-video";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const media = Buffer.from(handStoneVideoBase64, "base64");
  const size = media.length;
  const headers = new Headers({
    "Content-Type": "video/mp4",
    "Accept-Ranges": "bytes",
    "Cache-Control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff"
  });
  const range = request.headers.get("range");
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2])) {
      headers.set("Content-Range", `bytes */${size}`);
      return new Response(null, {status:416,headers});
    }
    let start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
    let end = match[2] && match[1] ? Number(match[2]) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || start < 0 || end < start) {
      headers.set("Content-Range", `bytes */${size}`);
      return new Response(null, {status:416,headers});
    }
    end = Math.min(end, size - 1);
    const bytes = Uint8Array.from(media.subarray(start, end+1));
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(bytes.length));
    return new Response(bytes, {status:206,headers});
  }
  headers.set("Content-Length", String(size));
  return new Response(Uint8Array.from(media), {status:200,headers});
}
