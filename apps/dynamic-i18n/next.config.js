// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  i18n,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  pwa: {
    disable: !isProduction,
    dest: 'public',
    register: true,
    skipWaiting: true,
    // runtimeCaching,
  },
};

module.exports = withPWA(withNx(nextConfig));
