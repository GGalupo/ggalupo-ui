import { type ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { IconButton } from '../..'

import { Container, ModalTitle } from './styles'

type ModalHeaderProps = {
  children: ReactNode
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <Container>
      <ModalTitle as="h1">{children}</ModalTitle>
      <Dialog.Close asChild>
        <IconButton variant="ghost">
          <X />
        </IconButton>
      </Dialog.Close>
    </Container>
  )
}
