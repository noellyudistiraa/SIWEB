import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const role = request.cookies.get('role')?.value; 

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (role !== 'admin') { 
            return NextResponse.redirect(new URL("/login", request.url)); // tempat redirect ges
        }
    }
}
