import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { AUTH_ROOT_PATH, CART_ROOT_PATH, MAIN_PATH, PROFILE_ROUTES } from './shared/routes';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if(url.pathname.startsWith(AUTH_ROOT_PATH) && request.cookies.get('accessToken')) {
    url.pathname = MAIN_PATH;
    return NextResponse.redirect(url);
  }

  if(url.pathname.startsWith(PROFILE_ROUTES.main) && !request.cookies.get('accessToken')) {
    url.pathname = MAIN_PATH;
    return NextResponse.redirect(url);
  }

  if(url.pathname === PROFILE_ROUTES.main && request.cookies.get('accessToken')) {
    url.pathname = PROFILE_ROUTES.settings;
    return NextResponse.redirect(url);
  }

  if(url.pathname.startsWith(CART_ROOT_PATH) && !request.cookies.get('accessToken')) {
    url.pathname = MAIN_PATH;
    return NextResponse.redirect(url);
  }
};
