import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LOCALES } from '@/constants/locale'
import { NextURL } from 'next/dist/server/web/next-url'
import CASE from 'case'

interface IRedirectConfig {
  nextUrl: NextURL
}

// 檢查是否為有效的 locale
const findLocale = (locale: string): string | undefined =>
  LOCALES.find(
    (allowLocale: string) => allowLocale.toLowerCase() === CASE.kebab(locale).toLowerCase(),
  )

// 處理重定向 URL
const getRedirectUrl = (redirectConfig: IRedirectConfig, findLocale: string) => {
  const { nextUrl } = redirectConfig
  nextUrl.locale = findLocale
  nextUrl.searchParams.delete('locale')
  return nextUrl
}

const handleLocaleRedirect = (redirectConfig: IRedirectConfig) => {
  const {
    nextUrl: { searchParams },
  } = redirectConfig
  // 只檢查 query string 中的 locale
  const queryStringLocale = searchParams.get('locale')
  const shouldRedirect = queryStringLocale
  if (shouldRedirect) {
    const validLocaleFromQuery = findLocale(queryStringLocale)
    if (validLocaleFromQuery) {
      const redirectUrl = getRedirectUrl(redirectConfig, validLocaleFromQuery)
      return NextResponse.redirect(redirectUrl)
    }
  }

  // 如果沒有 locale 或 locale 無效，不做重定向
  return undefined
}

const redirectMiddleware = (request: NextRequest) => {
  const redirectConfig = {
    nextUrl: request.nextUrl.clone(),
  }

  try {
    return handleLocaleRedirect(redirectConfig)
  } catch (error) {
    console.error('Locale redirect error:', error)
    return undefined
  }
}

export async function middleware(request: NextRequest) {
  return redirectMiddleware(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets/images).*)',
    /**
     * 此設定是為了解決有設定 basePath 的情況下，上列 matcher 讀不到 '/' 的問題
     */
    '/',
  ],
}
