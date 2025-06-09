import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react'

export type PolymorphicProps<C extends ElementType> = {
  as?: C
} & Omit<ComponentPropsWithoutRef<C>, 'as'>

export type PolymorphicComponentProps<C extends ElementType, P = object> = P &
  PolymorphicProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
