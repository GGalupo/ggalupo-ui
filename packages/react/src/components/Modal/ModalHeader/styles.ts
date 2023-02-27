import { Heading } from '../..'

import { styled } from '../../../styles'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$6',
})

export const ModalTitle = styled(Heading, {})
