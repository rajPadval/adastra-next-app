import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/pages/admin" || path === "/";

  const token = request.cookies.get("token")?.value || "";

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/pages/admin", request.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(
      new URL("/pages/admin/dashboard", request.nextUrl)
    );
  }
};

export const config = {
  matcher: ["/", "/pages/admin", "/pages/admin/dashboard"],
};
