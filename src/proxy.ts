import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path !== "/robcooper" && !path.startsWith("/robcooper/")) return NextResponse.next();

  const required = process.env.ROB_COOPER_PORTAL_PASSWORD;
  if (!required) return new NextResponse("Client portal is not configured yet.", { status: 503 });

  const header = request.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      if (decoded === `rob:${required}`) return NextResponse.next();
    } catch { /* invalid auth header */ }
  }

  return new NextResponse("Access restricted to invited pilot participants.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="AlignRISE client onboarding"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = { matcher: ["/robcooper/:path*"] };
