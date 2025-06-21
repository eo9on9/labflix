import '@/sources/app/lib/styles/reset.css'
import { PropsWithChildren } from 'react'
import './index.css'

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
