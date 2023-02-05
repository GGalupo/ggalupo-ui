import { User } from 'phosphor-react'
import { type ComponentProps } from 'react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

type AvatarImageProps = ComponentProps<typeof AvatarImage>
type AvatarContainerProps = ComponentProps<typeof AvatarContainer>

export type AvatarProps = ComponentProps<typeof AvatarImage>

export type AvatarPropsTest = {
  size: AvatarContainerProps['size']
} & AvatarImageProps

export const Avatar = ({
  size = 'md',
  ...avatarImageProps
}: AvatarPropsTest) => {
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
