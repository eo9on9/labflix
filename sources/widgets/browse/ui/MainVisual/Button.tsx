'use client'

import { PropsWithChildren } from 'react'
import * as styles from './Button.css'

interface ButtonProps {
  variant?: keyof typeof styles.button
  onClick?: () => void
}

export const Button = ({
  variant = 'primary',
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button type="button" className={styles.button[variant]} onClick={onClick}>
      {children}
    </button>
  )
}
