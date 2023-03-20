import { type ReactNode } from 'react'

import { type AlertStatus } from '../types'
import { AlertDescriptionContainer } from './styles'

type AlertDescriptionProps = {
  children: ReactNode
  status?: AlertStatus
}

export const AlertDescription = ({
  children,
  status,
}: AlertDescriptionProps) => {
  return (
    <AlertDescriptionContainer status={status}>
      {children}
    </AlertDescriptionContainer>
  )
}
