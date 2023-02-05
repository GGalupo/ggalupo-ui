import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  variants: {
    size: {
      xs: { width: '$4', height: '$4' },
      sm: { width: '$8', height: '$8' },
      md: { width: '$12', height: '$12' },
      lg: { width: '$16', height: '$16' },
      xl: { width: '$20', height: '$20' },
      xxl: { width: '$40', height: '$40' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',
  variants: {
    size: {
      xs: {
        svg: {
          width: '$4',
          height: '$4',
        },
      },
      sm: {
        svg: {
          width: '$4',
          height: '$4',
        },
      },
      md: {
        svg: {
          width: '$6',
          height: '$6',
        },
      },
      lg: {
        svg: {
          width: '$8',
          height: '$8',
        },
      },
      xl: {
        svg: {
          width: '$10',
          height: '$10',
        },
      },
      xxl: {
        svg: {
          width: '$12',
          height: '$12',
        },
      },
    },
  },
})
