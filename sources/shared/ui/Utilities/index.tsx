import { _Profile } from '@/sources/shared/ui/Utilities/_Profile'
import { _Search } from '@/sources/shared/ui/Utilities/_Search'

import * as styles from './index.css'

export const Utilities = () => {
  return (
    <ul className={styles.wrap}>
      <li>
        <_Search />
      </li>
      <li>
        <_Profile />
      </li>
    </ul>
  )
}
