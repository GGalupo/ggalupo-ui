import { type ElementType, type ComponentProps } from 'react'

import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
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

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}

Text.displayName = 'Text'
