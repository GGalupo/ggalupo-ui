import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, type TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text as="span" size="sm">
          Your website
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'https://yourwebsite.com',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
  },
}
