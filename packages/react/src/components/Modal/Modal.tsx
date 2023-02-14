import { type ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { EyeClosed } from 'phosphor-react'

import { styled, keyframes } from '../..'

import { ModalRoot, ModalOverlay } from './styles'

export type ModalProps = ComponentProps<typeof ModalRoot>

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: 'black',
  fontSize: 17,
})

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: 'red',
  fontSize: 15,
  lineHeight: 1.5,
})

const Flex = styled('div', { display: 'flex' })

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: 'red' },
  '&:focus': { boxShadow: '0 0 0 2px red' },
})

export const Modal = (props: ModalProps) => {
  return (
    <ModalRoot {...props}>
      <Dialog.Trigger asChild>
        <button>Open modal</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <DialogContent>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
          <p>Test</p>
          <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button>Save changes</button>
            </Dialog.Close>
          </Flex>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <EyeClosed />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </ModalRoot>
  )
}
