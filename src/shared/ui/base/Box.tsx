import { ElementType } from 'react'
import { PolymorphicComponentProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface _BoxProps {}

export function Box<C extends ElementType = 'div'>({
  as,
  ref,
  ...rest
}: PolymorphicComponentProps<C, _BoxProps>) {
  const Component = as ?? 'div'
  return <Component ref={ref} {...rest} />
}
