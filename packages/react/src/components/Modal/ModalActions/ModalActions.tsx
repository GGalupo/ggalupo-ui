import * as Dialog from '@radix-ui/react-dialog'
import { type ReactNode } from 'react'

import { Button } from '../..'

import { Container } from './styles'

export type ModalActionsProps = {
  children: ReactNode
  closeButton?: boolean
}

export const ModalActions = ({
  children,
  closeButton = false,
}: ModalActionsProps) => {
  return (
    <Container>
      {closeButton && (
        <Dialog.Close asChild>
          <Button variant="tertiary">Cancel</Button>
        </Dialog.Close>
      )}
      {children}
    </Container>
  )
}
