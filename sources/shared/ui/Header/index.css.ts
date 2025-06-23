import { style } from '@vanilla-extract/css'

export const wrap = style({
  zIndex: 1000,

  position: 'fixed',
  top: 8,
  left: 8,
  right: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 64,
  paddingInline: 24,

  borderRadius: 12,
  background: 'rgba(255, 255, 255, 0.55)',
  backdropFilter: 'blur(16px)',
  // boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
})

export const menu = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,
})

export const util = style({
  display: 'flex',
  alignItems: 'center',
})
