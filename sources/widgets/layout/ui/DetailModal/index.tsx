import { PropsWithChildren } from 'react'
import { Background } from './Background'
import { Panel } from './Panel'

interface DetailModal {
  id?: string
}

export const DetailModal = ({ id }: PropsWithChildren<DetailModal>) => {
  if (!id) return null

  return (
    <Background>
      <Panel />
    </Background>
  )
}
