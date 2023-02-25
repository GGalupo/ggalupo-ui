import { type ElementType, type ComponentProps } from 'react'

import { styled } from '../styles'

export const IconButton = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        svg: {
          fill: '$white',
        },
        background: '$grass500',
        '&:not(:disabled):hover': {
          backgroundColor: '$grass300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        svg: {
          fill: '$grass500',
        },
        border: '2px solid $grass500',

        '&:not(:disabled):hover': {
          backgroundColor: '$grass500',
          svg: {
            fill: '$white',
          },
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        svg: {
          fill: '$grass500',
        },

        '&:not(:disabled):hover': {
          svg: {
            fill: '$grass300',
          },
        },

        '&:disabled': {
          svg: {
            fill: '$gray600',
          },
        },
      },
    },

    size: {
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
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type IconButtonProps = ComponentProps<typeof IconButton> & {
  as?: ElementType
}

IconButton.displayName = 'IconButton'
