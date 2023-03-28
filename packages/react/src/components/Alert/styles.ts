import { styled } from '../../styles'

export const AlertContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  padding: '$3 $4',
  borderRadius: '$md',
  filter: 'brightness(0.8)',

  variants: {
    status: {
      info: {
        backgroundColor: '$sky900',

        svg: {
          color: '$sky300',
        },
      },
      danger: {
        backgroundColor: '$danger900',

        svg: {
          color: '$danger300',
        },
      },
      warning: {
        backgroundColor: '$sun900',

        svg: {
          color: '$sun500',
        },
      },
      success: {
        backgroundColor: '$grass900',
        filter: 'brightness(1)',

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

export const IconContainer = styled('div', {
  svg: {
    width: '1.3rem',
    height: '1.3rem',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})
