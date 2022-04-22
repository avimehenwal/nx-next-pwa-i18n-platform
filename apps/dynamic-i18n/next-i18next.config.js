const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath: path.resolve('./libs/translations/locales'),
  },
  detection: {
    caches: ['cookie'],
    cookieSameSite: 'strict',
    lookupCookie: 'next-i18next',
    order: ['querystring', 'cookie', 'header'],
  },
};
