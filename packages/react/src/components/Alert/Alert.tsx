import { type ReactNode } from 'react'
import { Warning, Info, WarningCircle, CheckCircle } from 'phosphor-react'

import { AlertContainer, ContentContainer, IconContainer } from './styles'
import { type AlertStatus } from './types'

export type AlertProps = {
  children: ReactNode
  status?: AlertStatus
}

export const Alert = ({ children, status = 'info' }: AlertProps) => {
  const alertIcon = {
    danger: <WarningCircle />,
    info: <Info />,
    success: <CheckCircle />,
    warning: <Warning />,
  }

  return (
    <AlertContainer status={status}>
      <IconContainer>{alertIcon[status]}</IconContainer>
      <ContentContainer>{children}</ContentContainer>
    </AlertContainer>
  )
}

Alert.displayName = 'Alert'
