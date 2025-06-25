import { style } from '@vanilla-extract/css'

export const wrap = style({
  zIndex: 2000,

  overflow: 'auto',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  display: 'flex',
  justifyContent: 'center',

  paddingBlock: 64,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})
