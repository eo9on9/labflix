import { logo } from '@/sources/shared/ui/Logo/index.css'
import Link from 'next/link'

export const Logo = () => {
  return (
    <h1 className={logo}>
      <Link href="/browse">LABFLIX</Link>
    </h1>
  )
}
