import { NextRequest, NextResponse } from 'next/server'

const signInUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/bookings/:path*',
}
