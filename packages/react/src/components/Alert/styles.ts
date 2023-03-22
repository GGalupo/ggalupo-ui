import { styled } from '../../styles'

export const AlertContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  padding: '$3 $2',
  borderRadius: '$md',

  svg: {
    width: '1.25rem',
    height: '1.25rem',
  },

  variants: {
    status: {
      info: {
        backgroundColor: '$sky900',

        svg: {
          color: '$sky400',
        },
      },
      danger: {
        backgroundColor: '$danger900',
        svg: {
          color: '$danger400',
        },
      },
      warning: {
        backgroundColor: '$sun900',
        svg: {
          color: '$sun400',
        },
      },
      success: {
        backgroundColor: '$grass700',
        svg: {
          color: '$grass300',
        },
      },
    },
  },
  defaultVariants: {
    status: 'info',
  },
})
