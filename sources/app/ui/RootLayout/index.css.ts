import { globalFontFace } from '@vanilla-extract/css'

globalFontFace('Pretendard', [
  {
    src: 'url("/assets/fonts/Pretendard-Regular.woff2") format("woff2")',
    fontWeight: '400',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  {
    src: 'url("/assets/fonts/Pretendard-Bold.woff2") format("woff2")',
    fontWeight: '700',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
])
