import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Modal,
  ModalActions as ModalActionsComponent,
  ModalActionsProps,
  ModalTrigger,
  ModalWrapper,
  Text,
} from '@ggalupo-ui/react'

export default {
  title: 'Overlay/Modal/ModalActions',
  component: ModalActionsComponent,
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
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              explicabo atque nesciunt similique nam sapiente recusandae quaerat
              accusantium sit, ullam ex alias maxime quia consequuntur eveniet
              perferendis. Odio, molestiae vel.
            </Text>
            {Story()}
          </ModalWrapper>
        </Modal>
      </Box>
    ),
  ],
  args: {
    closeButton: true,
    children: <Button>Create user</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ModalActionsProps>

export const ModalActions: StoryObj<ModalActionsProps> = {}
