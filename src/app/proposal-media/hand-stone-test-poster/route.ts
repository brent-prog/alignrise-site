import { handStonePosterBase64 } from "@/content/proposal-media/hand-stone-test-poster";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  const bytes = Uint8Array.from(Buffer.from(handStonePosterBase64, "base64"));
  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
