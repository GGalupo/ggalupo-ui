import { type ComponentProps } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export type ModalProps = ComponentProps<typeof Dialog.Root>
export type ModalTriggerProps = ComponentProps<typeof Dialog.Trigger>

export const Modal = ({ children, ...props }: ModalProps) => {
  return <Dialog.Root {...props}>{children}</Dialog.Root>
}
