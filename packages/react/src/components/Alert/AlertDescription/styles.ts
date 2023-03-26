import { Text } from '../../Text'
import { styled } from '../../../styles'

export const AlertDescriptionContainer = styled(Text, {
  lineHeight: '1.5rem',

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
