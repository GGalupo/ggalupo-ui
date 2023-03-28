import type { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  Alert as AlertComponent,
  AlertDescription,
  AlertTitle,
} from '@ggalupo-ui/react'

export default {
  title: 'Status/Alert',
  component: AlertComponent,
  args: {
    status: 'info',
  },
  argTypes: {
    status: {
      options: ['info', 'warning', 'danger', 'success'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof AlertComponent>

const Template: ComponentStory<typeof AlertComponent> = ({
  children,
  ...rest
}) => <AlertComponent {...rest}>{children}</AlertComponent>

export const Default = Template.bind({})
Default.args = {
  children: (
    <AlertDescription status={Default.args?.status}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, minus
      suscipit dignissimos odit nisi hic nobis dolores obcaecati veniam eaque
      provident, sit ratione repellendus, tenetur saepe officiis doloremque!
      Accusantium, vitae!
    </AlertDescription>
  ),
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  children: (
    <>
      <AlertTitle>Some cool title</AlertTitle>
      <AlertDescription status={WithTitle.args?.status}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, minus
        suscipit dignissimos odit nisi hic nobis dolores obcaecati veniam eaque
        provident, sit ratione repellendus, tenetur saepe officiis doloremque!
        Accusantium, vitae!
      </AlertDescription>
    </>
  ),
}
