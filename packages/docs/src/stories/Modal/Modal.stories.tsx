import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Modal as ModalComponent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  Text,
} from '@ggalupo-ui/react'

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
          position: 'relative',
        }}
      >
        <div
          style={{
            background: 'green',
            position: 'absolute',
            top: 15,
            left: 15,
            padding: '0.5rem',
          }}
        >
          <Text>Open the modal to see overlay opacity</Text>
        </div>
        {Story()}
      </Box>
    ),
  ],
  args: {
    children: (
      <>
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
        </ModalWrapper>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ModalProps>

export const Modal: StoryObj<ModalProps> = {}
