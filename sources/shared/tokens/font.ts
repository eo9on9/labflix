const fallbacks = ['Arial', 'Helvetica', 'sans-serif']

const withFallbacks = (font: string) => [font, ...fallbacks].join(', ')

export const font = {
  pretendard: withFallbacks('Pretendard'),
} as const

export type KindOfFont = keyof typeof font
