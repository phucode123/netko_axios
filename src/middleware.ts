import { NextResponse, NextRequest } from 'next/server'
import { parse } from 'cookie';


export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const cookie = request.headers.get('cookie');
    const cookies = parse(cookie || '');
    console.log("access token: "+ cookies.accessToken);

    if (!cookies.accessToken && pathname != '/auth/login') {
        return NextResponse.redirect(new URL('/auth/login', request.url));  
    }
    return NextResponse.next();

}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}