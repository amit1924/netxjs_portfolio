// import { getSession } from "@auth0/nextjs-auth0/edge";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   try {
//     // ✅ Pass `req` to `getSession()`
//     const session = await getSession(req);

//     const { pathname } = req.nextUrl;

//     // ✅ Redirect unauthorized users from "/portfolio" to "/login"
//     if (!session?.user && pathname.startsWith("/portfolio")) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }

//     // ✅ Prevent logged-in users from accessing the login page
//     if (session?.user && pathname === "/login") {
//       return NextResponse.redirect(new URL("/portfolio", req.url));
//     }

//     return NextResponse.next();
//   } catch (error) {
//     console.error("Authentication error:", error);

//     // ✅ Optionally redirect users to an error page instead of allowing access
//     return NextResponse.redirect(new URL("/error", req.url));
//   }
// }

// // ✅ Improved `matcher` to exclude API, static assets, and login
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|error|login).*)"],
// };


import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"; // ✅ Correct import

export async function middleware(req: NextRequest) {
  try {
    const res = new NextResponse(); // ✅ Create a response object
    const session = await getSession(req, res); // ✅ Pass both req and res

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

// ✅ Matcher to exclude API, static assets, and login
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|error|login).*)"],
};
