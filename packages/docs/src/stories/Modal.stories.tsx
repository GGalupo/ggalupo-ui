import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box, Modal as ModalComponent } from '@ggalupo-ui/react'
import { useState } from 'react'

export default {
  title: 'Overlay/Modal/Modal',
  component: ModalComponent,
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
  argTypes: {
    open: {
      type: 'boolean',
      description: 'A boolean to control if the modal is open or close',
    },
    onOpenChange: {
      type: 'function',
      description:
        'A function which toggles the modal state between closed and opened',
    },
  },
} as ComponentMeta<typeof ModalComponent>

export const Modal: ComponentStory<typeof ModalComponent> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleModal = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <ModalComponent open={isOpen} onOpenChange={handleToggleModal}>
      Teste
    </ModalComponent>
  )
}
