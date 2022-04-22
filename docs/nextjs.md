# i8n

locale strategies
1. sub-path routhing
2. domain routing

Accept-Language header is sent for every request - nextjs automatic locale detection
nextjs website automatically loads the version preferred in browser language settings

## Cheaveats

- This Middleware skips adding the default prefix to API Routes and public files like fonts or images.
- i8n routing is only required for content pages and not for assets, fonts, images, apis routes
- all locale variants of the page desired to be prerendered need to be returned from getStaticPaths
  - it can increase build times depending on how many locales are configured inside getStaticProps.

## i8nm tasks

1. supported locale and default locale
2. switch locale
3. access locale specific information on page userRouter() hook
4. NEXT_LOCALE cookie
5. localization @server from CMS

## search best libraries

https://openbase.com/