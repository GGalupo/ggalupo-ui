import { Text } from '../../Text'

import { styled } from '../../../styles'

export const AlertTitleContainer = styled(Text, {
  lineHeight: '1.5rem',
  fontWeight: '$medium',

  variants: {
    status: {
      info: {
        color: '$sky300',
      },
      danger: {
        color: '$danger300',
      },
      warning: {
        color: '$sun500',
      },
      success: {
        color: '$grass300',
      },
    },
  },
})
