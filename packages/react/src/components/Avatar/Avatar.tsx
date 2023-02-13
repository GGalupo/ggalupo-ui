import { User } from 'phosphor-react'
import { type ComponentProps } from 'react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

type AvatarContainerProps = ComponentProps<typeof AvatarContainer>
export type AvatarProps = ComponentProps<typeof AvatarImage>

export type AvatarComponentProps = {
  size?: AvatarContainerProps['size']
} & AvatarProps

export const Avatar = ({
  size = 'md',
  ...avatarImageProps
}: AvatarComponentProps) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...avatarImageProps} />
      <AvatarFallback size={size} delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
