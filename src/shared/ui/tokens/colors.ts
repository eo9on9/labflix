const blue = {
  blue50: '#E8EEF4',
  blue100: '#D3DBE6',
  blue200: '#B7C2D4',
  blue300: '#93A1BB',
  blue400: '#6D7FA1',
  blue500: '#4F6589',
  blue600: '#3E5879',
  blue700: '#2F4563',
  blue800: '#24364D',
  blue900: '#1A2538',
} as const

const brown = {
  brown50: '#FBF9F5',
  brown100: '#F5EFE7',
  brown200: '#EEE5DA',
  brown300: '#E5D8C8',
  brown400: '#DBCAB7',
  brown500: '#D3BEAD',
  brown600: '#C5B2A3',
  brown700: '#B7A699',
  brown800: '#98897E',
  brown900: '#7C6F67',
} as const

const red = {
  red50: '#FFF5F5',
  red100: '#FFE3E3',
  red200: '#FFBDBD',
  red300: '#FF9B9B',
  red400: '#F97070',
  red500: '#F04444',
  red600: '#D73737',
  red700: '#B42C2C',
  red800: '#922020',
  red900: '#771A1A',
} as const

const gray = {
  gray50: '#FFFFFF',
  gray100: '#E6E6E6',
  gray200: '#CCCCCC',
  gray300: '#B3B3B3',
  gray400: '#999999',
  gray500: '#808080',
  gray600: '#666666',
  gray700: '#4D4D4D',
  gray800: '#333333',
  gray900: '#000000',
} as const

const semantic = {
  primary: blue.blue600,
  primaryLight: blue.blue100,
  secondary: brown.brown600,
  secondaryLight: brown.brown100,
  negative: red.red600,
  negativeLight: red.red100,
} as const

export const colors = { ...blue, ...brown, ...red, ...gray, ...semantic } as const

export type KindOfColors = keyof typeof colors
