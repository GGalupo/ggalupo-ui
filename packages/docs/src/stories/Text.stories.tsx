import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nisi assumenda asperiores accusantium temporibus, itaque voluptas eaque velit ipsa, explicabo tempora, pariatur voluptates fugit saepe fuga. Quos blanditiis odio laboriosam!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
