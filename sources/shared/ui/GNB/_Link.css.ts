import { style } from '@vanilla-extract/css'

export const wrap = style({
  fontSize: 16,

  selectors: {
    '&:hover': {
      opacity: 0.6,
    },
  },
})
