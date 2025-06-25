'use client'

import { useRouter } from 'next/navigation'
import { Button } from './Button'
import * as styles from './Information.css'

interface InformationProps {
  title: string
}

export const Information = ({ title }: InformationProps) => {
  const router = useRouter()

  const onPlay = () => {
    // TODO
  }

  const onDetail = () => {
    const params = new URLSearchParams()

    params.set('detailId', 'abc')

    router.push(`?${params.toString()}`)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.action}>
        <Button variant="primary" onClick={onPlay}>
          Play
        </Button>
        <Button variant="secondary" onClick={onDetail}>
          Detail
        </Button>
      </div>
    </div>
  )
}
