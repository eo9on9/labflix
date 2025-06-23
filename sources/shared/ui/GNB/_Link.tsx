'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'

import * as styles from './_Link.css'

export const _Link = ({ children }: PropsWithChildren) => {
  return (
    <Link href="#" onClick={e => e.preventDefault()} className={styles.wrap}>
      {children}
    </Link>
  )
}
