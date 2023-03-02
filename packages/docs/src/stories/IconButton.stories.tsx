import type { Meta, StoryObj } from '@storybook/react'
import {
  IconButton as IconButtonComponent,
  type IconButtonProps,
} from '@ggalupo-ui/react'
import { Minus } from 'phosphor-react'

export default {
  title: 'Form/IconButton',
  component: IconButtonComponent,
  args: {
    children: <Minus />,
    variant: 'contained',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'ghost'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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

export const IconButton: StoryObj<IconButtonProps> = {}
