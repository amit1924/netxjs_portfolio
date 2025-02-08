import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    const res = new NextResponse(); 
    const session = await getSession(req, res); 

    const { pathname } = req.nextUrl;

    if (!session?.user && pathname.startsWith("/portfolio")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (session?.user && pathname === "/login") {
      return NextResponse.redirect(new URL("/portfolio", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.redirect(new URL("/error", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|error|login).*)"],
};