import { style } from '@vanilla-extract/css'

export const wrap = style({
  position: 'relative',
  aspectRatio: '16 / 9',

  selectors: {
    '&:after': {
      content: '',

      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 64,
      paddingInline: 24,
      textAlign: 'right',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
    },
  },
})

export const float = style({
  position: 'absolute',
  bottom: '20%',
  right: 24,
})
