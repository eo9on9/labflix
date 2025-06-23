import { PropsWithChildren } from 'react'

import * as styles from './_Background.css'

export const _Background = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrap}>{children}</div>
}
