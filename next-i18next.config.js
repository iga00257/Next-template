const path = require('path')
const LOCALES_ENUM = {
  EN: 'en',
  ZH_TW: 'zh-TW',
  ZH_CN: 'zh-CN',
}

const LOCALES = Object.values(LOCALES_ENUM)
const FALLBACK_LOCALE = LOCALES_ENUM.EN

/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: 'default',
    locales: [...LOCALES, 'default'],
  },
  defaultNS: 'common',
  fallbackLng: [FALLBACK_LOCALE],
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.DEPLOY_ENV === 'development',
}
module.exports = i18nConfig
