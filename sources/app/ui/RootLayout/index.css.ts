import { font } from '@/sources/shared/tokens'
import { globalFontFace, globalStyle } from '@vanilla-extract/css'

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
  {
    src: 'url("/assets/fonts/Pretendard-ExtraBold.woff2") format("woff2")',
    fontWeight: '800',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
])

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  color: 'inherit',
})

globalStyle('a', {
  textDecoration: 'none',
})

globalStyle('html', {
  fontFamily: font.pretendard,
  color: '#222',
  background: '#000',
})

globalStyle('button', {
  all: 'unset',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  color: 'inherit',
})
