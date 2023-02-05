import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, type AvatarProps } from '@ggalupo-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    size: 'md',
    src: 'https://github.com/GGalupo.png',
    alt: 'Gustavo Galupo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
