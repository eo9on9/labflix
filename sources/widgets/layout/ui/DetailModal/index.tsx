import { PropsWithChildren } from 'react'
import { _Background } from './_Background'
import { _Panel } from './_Panel'

interface DetailModal {
  id?: string
}

export const DetailModal = ({ id }: PropsWithChildren<DetailModal>) => {
  if (!id) return null

  return (
    <_Background>
      <_Panel />
    </_Background>
  )
}
