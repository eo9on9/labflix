export const media = {
  mobile: 'screen and (max-width: 599px)',
  tablet: 'screen and (min-width: 600px) and (max-width: 1279px)',
  pc: 'screen and (min-width: 1280px)',
} as const

export type KindOfMedia = keyof typeof media
