import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_el, i) => {
          const step = i + 1
          return <Step key={i} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
