import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here if needed
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Check if user is authenticated
        const isAuthenticated = !!token
        const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
        
        // Allow access to auth pages
        if (isAuthPage) {
          return true
        }
        
        // Redirect to sign in if not authenticated
        if (!isAuthenticated) {
          return false
        }
        
        return true
      },
    },
    pages: {
      signIn: '/auth/signin',
    },
  }
)

// Protect all routes except for auth pages, API routes, and static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (authentication pages)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
  ],
}