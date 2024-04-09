import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if(url.pathname.startsWith('/auth') && request.cookies.get('accessToken')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  if(url.pathname.startsWith('/profile') && !request.cookies.get('accessToken')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  if(url.pathname === '/profile' && request.cookies.get('accessToken')) {
    url.pathname = '/profile/settings';
    return NextResponse.redirect(url);
  }
};
