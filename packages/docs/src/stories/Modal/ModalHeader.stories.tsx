import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Modal,
  ModalHeader as ModalHeaderComponent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  Text,
} from '@ggalupo-ui/react'

export default {
  title: 'Overlay/Modal/ModalHeader',
  component: ModalHeaderComponent,
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
        <Modal>
          <ModalTrigger>
            <Button>Open modal</Button>
          </ModalTrigger>
          <ModalWrapper>
            {Story()}
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              explicabo atque nesciunt similique nam sapiente recusandae quaerat
              accusantium sit, ullam ex alias maxime quia consequuntur eveniet
              perferendis. Odio, molestiae vel.
            </Text>
          </ModalWrapper>
        </Modal>
      </Box>
    ),
  ],
  args: {
    children: 'Some cool title',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ModalProps>

export const ModalHeader: StoryObj<ModalProps> = {}
