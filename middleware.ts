import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n.config';

export default createMiddleware({
  // 支持的语言列表
  locales: locales,
  defaultLocale: defaultLocale,
  // 本地化检测策略
  localeDetection: true
});

export const config = {
  // 匹配所有路径除了 /api/*, /_next/*, /images/*
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 