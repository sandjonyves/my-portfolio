import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    // Détecte la langue du navigateur
    const acceptLang = request.headers.get('accept-language') || '';
    const preferred = acceptLang.split(',')[0].split('-')[0];
    const locale = ['fr', 'en'].includes(preferred) ? preferred : 'en';
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
}; 