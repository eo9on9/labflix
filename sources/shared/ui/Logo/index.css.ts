import { font } from '@/sources/shared/tokens'
import { style } from '@vanilla-extract/css'

export const logo = style({
  fontFamily: font.pretendard,
  fontWeight: 800,
  fontSize: 32,
  letterSpacing: -4,

  // '@media': {
  //   [media.tablet]: { padding: '16px' },
  //   [media.mobile]: { padding: '8px' },
  // },
})
