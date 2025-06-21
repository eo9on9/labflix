import '@/sources/app/lib/styles/reset.css'
import { PropsWithChildren } from 'react'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
