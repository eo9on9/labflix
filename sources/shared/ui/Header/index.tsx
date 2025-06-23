import { GNB } from '@/sources/shared/ui/GNB'
import { Logo } from '@/sources/shared/ui/Logo'
import { Utilities } from '@/sources/shared/ui/Utilities'

import * as styles from './index.css'

export const Header = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.menu}>
        <Logo />
        <GNB />
      </div>
      <div className={styles.util}>
        <Utilities />
      </div>
    </div>
  )
}
