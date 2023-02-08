import { createIntlMiddleware } from 'next-intl/server'

export default createIntlMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en'
})

export const config = {
  // Skip all internal paths
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}