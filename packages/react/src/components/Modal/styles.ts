import * as Dialog from '@radix-ui/react-dialog'

import { keyframes, styled } from '../../styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const ModalRoot = styled(Dialog.Root, {
  backgroundColor: '$gray800',
})

export const ModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$gray900',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})
