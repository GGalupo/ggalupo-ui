import { type ReactNode } from 'react'

import { type AlertStatus } from '../types'
import { AlertTitleContainer } from './styles'

type AlertTitleProps = {
  children: ReactNode
  status?: AlertStatus
}

export const AlertTitle = ({ children, status }: AlertTitleProps) => {
  return <AlertTitleContainer status={status}>{children}</AlertTitleContainer>
}
