import { type ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

type ModalTriggerProps = {
  children: ReactNode
}

export const ModalTrigger = ({ children }: ModalTriggerProps) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
}
