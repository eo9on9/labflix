import { PropsWithChildren } from 'react'
import { _Modal } from './_Modal'

interface WithDetailModal {
  id?: string
}

export const WithDetailModal = ({
  id,
  children,
}: PropsWithChildren<WithDetailModal>) => {
  return (
    <>
      {children}
      {id && <_Modal />}
    </>
  )
}
