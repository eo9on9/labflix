import Image from 'next/image'

import * as styles from './Background.css'

interface BackgroundProps {
  src: string
  alt: string
}

export const Background = ({ src, alt }: BackgroundProps) => {
  return (
    <Image
      src={src}
      width={1280}
      height={760}
      alt={alt}
      priority
      className={styles.image}
    />
  )
}
