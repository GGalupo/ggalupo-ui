import {
  type ComponentProps,
  type ElementRef,
  forwardRef,
  type ForwardRefRenderFunction,
} from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
}

export const TextInputBase: ForwardRefRenderFunction<
  ElementRef<typeof Input>,
  TextInputProps
> = ({ prefix, size, ...props }) => {
  return (
    <TextInputContainer size={size}>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInputBase.displayName = 'TextInput'

export const TextInput = forwardRef(TextInputBase)
