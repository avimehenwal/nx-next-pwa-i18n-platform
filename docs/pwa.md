# PWA

1. get next-pwa package
2. generate manifest file to register a web-app as a PWA
   1. and throw assets in public directory so taht browser can figure out what to do with what
3. add link to manifest file in _document file
4. let nextjs config know and use PWA

## How to test a PWA

```
npx nx build web-platform --prod && npx nx serve web-platform --prod 
```

- then look for install option on top RHS of URL bar
- chrome devtools > Application > Manifest
