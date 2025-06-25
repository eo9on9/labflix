import { PropsWithChildren } from 'react'

import * as styles from './Background.css'

export const Background = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrap}>{children}</div>
}
