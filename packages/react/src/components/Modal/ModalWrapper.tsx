import { type ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { ModalContent, ModalOverlay } from './styles'

type ModalWrapperProps = {
  children: ReactNode
}

export const ModalWrapper = ({ children }: ModalWrapperProps) => {
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent onOpenAutoFocus={(e) => e.preventDefault()}>
        {children}
      </ModalContent>
    </Dialog.Portal>
  )
}
