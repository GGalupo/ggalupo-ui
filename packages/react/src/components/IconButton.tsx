import { type ElementType, type ComponentProps } from 'react'

import { styled } from '../styles'

export const IconButton = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      contained: {
        color: '$white',
        background: '$grass500',
        '&:not(:disabled):hover': {
          backgroundColor: '$grass300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      outlined: {
        color: '$grass500',
        border: '2px solid $grass500',

        '&:not(:disabled):hover': {
          backgroundColor: '$grass500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      ghost: {
        color: '$grass500',

        '&:not(:disabled):hover': {
          color: '$grass300',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },
    },

    size: {
      xs: {
        padding: '$2',
        svg: {
          width: '$3',
          height: '$3',
        },
      },
      sm: {
        svg: {
          width: '$3',
          height: '$3',
        },
      },

      md: {
        svg: {
          width: '$4',
          height: '$4',
        },
      },

      lg: {
        svg: {
          width: '$5',
          height: '$5',
        },
      },

      xl: {
        padding: '$4',
        svg: {
          width: '$7',
          height: '$7',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },
})

export type IconButtonProps = ComponentProps<typeof IconButton> & {
  as?: ElementType
}

IconButton.displayName = 'IconButton'
