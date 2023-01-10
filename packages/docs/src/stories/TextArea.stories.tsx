import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, type TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text as="span" size="sm">
          Considerations
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type any consideration',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
