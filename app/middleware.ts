import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './utils/session';

interface ProtectedRoute {
  pattern: RegExp;
  permissions: string[];
}

// Specify protected and public routes
const publicRoutes = ['/auth/jwt/sign-in'];
const publicApiRoute = ['/api/auth/authentication/login'];
const protectedRoutes: ProtectedRoute[] = [
  // { pattern: /^\/identity\/artist$/, permissions: ['creator:read'] },
  // { pattern: /^\/identity\/artist\/\d+$/, permissions: ['creator:read'] },
  // { pattern: /^\/identity\/artist\/new$/, permissions: ['creator:create'] },
  // { pattern: /^\/identity\/artist\/edit\/\d+$/, permissions: ['creator:update'] },
];

export default async function middleware(req: NextRequest) {
  // Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const isPublicApiRoute = publicApiRoute.includes(path);

  // Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value;
  if (!cookie) {
    if (path.startsWith('/api') && !isPublicApiRoute) {
      return NextResponse.json({ message: 'unauthorized' }, { status: 401 });
    }

    if (!path.startsWith('/api') && !isPublicRoute) {
      return NextResponse.redirect(new URL('/auth/jwt/sign-in', req.nextUrl));
    }
  }

  if (cookie) {
    if (isPublicRoute) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    const sessionData = await decrypt(cookie);

    if (!sessionData) {
      req.cookies.delete('session');

      if (path.startsWith('/api') && !isPublicApiRoute) {
        const response = NextResponse.json({ message: 'unauthorized' }, { status: 401 });
        response.cookies.delete('session');
        return response;
      }

      if (!path.startsWith('/api') && !isPublicRoute) {
        const response = NextResponse.redirect(new URL('/auth/jwt/sign-in', req.nextUrl));
        response.cookies.delete('session');
        return response;
      }
    }

    const protectedRoute = protectedRoutes.find((route) => route.pattern.test(path));

    if (protectedRoute) {
      const userPermissions = (sessionData as any)?.user?.permissions || [];
      const hasPermission = protectedRoute.permissions.every((permission) =>
        userPermissions.includes(permission)
      );

      if (!hasPermission) {
        return NextResponse.redirect(new URL('/error/403', req.nextUrl));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    // eslint-disable-next-line max-len
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
