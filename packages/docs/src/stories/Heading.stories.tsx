import type { Meta, StoryObj } from '@storybook/react'
import { Heading, type HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nisi assumenda asperiores accusantium temporibus, itaque voluptas eaque velit ipsa, explicabo tempora, pariatur voluptates fugit saepe fuga. Quos blanditiis odio laboriosam!',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading default value is `h2`, but that can be changed with `as` prop.',
      },
    },
  },
}
