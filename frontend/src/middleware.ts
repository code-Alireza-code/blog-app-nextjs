import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/profile")) {
    const { user, isAdmin } = await middlewareAuth(request);
    console.log({ user, isAdmin });
    if (!user)
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    if (user && !isAdmin) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
  if (
    request.nextUrl.pathname.startsWith("/signin") ||
    request.nextUrl.pathname.startsWith("/signup")
  ) {
    const { user } = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config: MiddlewareConfig = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};
