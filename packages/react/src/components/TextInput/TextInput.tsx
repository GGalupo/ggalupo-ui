import { type ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
}

export const TextInput = ({ prefix, size, ...props }: TextInputProps) => {
  return (
    <TextInputContainer size={size}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
