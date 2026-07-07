import { NextResponse } from "next/server";

export function middleware(request) {

    const passwordCookie = request.cookies.get("site_auth");

    if (!passwordCookie) {
        return NextResponse.redirect(
            new URL("/login.html", request.url)
        );
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
        "/",
        "/index.html"
    ]
};