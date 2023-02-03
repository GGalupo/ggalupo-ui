import { type ElementType, type ComponentProps } from 'react'

import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$5xl' },
      '2xl': { fontSize: '$6xl' },
      '3xl': { fontSize: '$7xl' },
      '4xl': { fontSize: '$8xl' },
      '5xl': { fontSize: '$9xl' },
    },
    level: {
      default: { color: '$gray100' },
      danger: { color: '$danger400' },
      info: { color: '$sky400' },
      warning: { color: '$sun400' },
      success: { color: '$grass500' },
    },
  },
  defaultVariants: {
    size: 'md',
    level: 'default',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}

Heading.displayName = 'Heading'
