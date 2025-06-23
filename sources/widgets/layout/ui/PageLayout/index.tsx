import { Header } from '@/sources/shared/ui/Header'
import { PropsWithChildren } from 'react'

import * as styles from './index.css'

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrap}>
      <Header />
      {children}
    </div>
  )
}
