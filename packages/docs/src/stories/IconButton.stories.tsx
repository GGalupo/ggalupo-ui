import type { Meta, StoryObj } from '@storybook/react'
import { IconButton, type IconButtonProps } from '@ggalupo-ui/react'
import { Minus } from 'phosphor-react'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    children: <Minus />,
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<IconButtonProps>

export const Primary: StoryObj<IconButtonProps> = {}
