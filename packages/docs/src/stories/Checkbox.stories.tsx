import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, type CheckboxProps } from '@ggalupo-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text as="span" size="sm">
          Accept terms
        </Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
