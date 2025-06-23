import { _Link } from '@/sources/shared/ui/GNB/_Link'
import * as styles from './index.css'

export const GNB = () => {
  return (
    <ul className={styles.wrap}>
      <li>
        <_Link>홈</_Link>
      </li>
      <li>
        <_Link>시리즈</_Link>
      </li>
      <li>
        <_Link>영화</_Link>
      </li>
      <li>
        <_Link>게임</_Link>
      </li>
    </ul>
  )
}
