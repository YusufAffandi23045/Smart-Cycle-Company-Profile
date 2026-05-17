import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("session");

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
<<<<<<< HEAD
  matcher: ["/dashboard/:path*"],
=======
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|icons/|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)",
  ],
>>>>>>> a033e6a (prepare merge)
};