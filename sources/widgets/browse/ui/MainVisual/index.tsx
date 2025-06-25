import { Background } from './Background'
import { Information } from './Information'

import * as styles from './index.css'

export const MainVisual = () => {
  return (
    <div className={styles.wrap}>
      <Background
        src="https://image.tmdb.org/t/p/w1280/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg"
        alt="Lilo & Stitch"
      />
      <div className={styles.float}>
        <Information title="Lilo & Stitch" />
      </div>
    </div>
  )
}
