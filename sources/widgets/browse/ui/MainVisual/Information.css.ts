import { style } from '@vanilla-extract/css'

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const title = style({
  fontSize: 64,
  fontWeight: 800,
  color: 'white',
  textShadow: '0px 0px 8px rgba(0, 0, 0, 1)',
})

export const action = style({
  display: 'flex',
  justifyContent: 'end',
  gap: 16,
})
