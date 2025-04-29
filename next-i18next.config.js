const path = require('path')

const LOCALES_ENUM = {
  EN: 'en',
  ZH_TW: 'zh-TW',
  ZH_CN: 'zh-CN',
}

const LOCALES = Object.values(LOCALES_ENUM)

/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
  i18n: {
    defaultLocale: 'default',
    locales: [...LOCALES, 'default'],
  },
  defaultNS: 'common',
  localePath: path.resolve('./public/locales'),
}
module.exports = i18nConfig
