import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function localeFromPath(pathname: string) {
  return pathname === "/br" || pathname.startsWith("/br/") ? "pt" : "es";
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", localeFromPath(request.nextUrl.pathname));

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|.*\\..*).*)"],
};
