import { style, styleVariants } from '@vanilla-extract/css'

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 20px',
  fontSize: 24,
  fontWeight: 700,
  borderRadius: '4px',
  cursor: 'pointer',
  opacity: 1,
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
  selectors: {
    '&:hover': {
      opacity: 1,
    },
  },
})

export const button = styleVariants({
  primary: [
    base,
    {
      backgroundColor: '#222',
      color: '#fff',
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: '#fff',
      color: '#222',
    },
  ],
})
