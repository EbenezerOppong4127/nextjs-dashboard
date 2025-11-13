// Auth middleware disabled - no authentication required
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
 
// export default NextAuth(authConfig).auth;
 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

// Empty middleware - all routes are accessible
export default function middleware() {
  // No auth check - allow all requests
}

export const config = {
  matcher: [],
};