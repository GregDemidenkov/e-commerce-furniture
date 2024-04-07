import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from './shared/utils/cookie';

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
}