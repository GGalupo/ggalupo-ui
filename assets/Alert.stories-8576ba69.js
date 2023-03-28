var u=Object.defineProperty;var i=(t,n)=>u(t,"name",{value:n,configurable:!0});import{A as a,a as c,b as d}from"./index-66773bde.js";import{j as e,a as m,F as g}from"./jsx-runtime-c2142c84.js";import"./index-42521bac.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-4bd83974.js";const v={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{default:{startLoc:{col:56,line:29},endLoc:{col:59,line:32},startBody:{col:56,line:29},endBody:{col:59,line:32}},"with-title":{startLoc:{col:56,line:29},endLoc:{col:59,line:32},startBody:{col:56,line:29},endBody:{col:59,line:32}}}}},title:"Status/Alert",component:a,args:{status:"info"},argTypes:{status:{options:["info","warning","danger","success"],control:{type:"inline-radio"}},children:{control:{type:null}}}},p=i(({children:t,...n})=>e(a,{...n,children:t}),"Template"),o=p.bind({});var r;o.args={children:e(c,{status:(r=o.args)==null?void 0:r.status,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, minus suscipit dignissimos odit nisi hic nobis dolores obcaecati veniam eaque provident, sit ratione repellendus, tenetur saepe officiis doloremque! Accusantium, vitae!"})};const s=p.bind({});var l;s.args={children:m(g,{children:[e(d,{children:"Some cool title"}),e(c,{status:(l=s.args)==null?void 0:l.status,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, minus suscipit dignissimos odit nisi hic nobis dolores obcaecati veniam eaque provident, sit ratione repellendus, tenetur saepe officiis doloremque! Accusantium, vitae!"})]})};const D=["Default","WithTitle"];export{o as Default,s as WithTitle,D as __namedExportsOrder,v as default};
//# sourceMappingURL=Alert.stories-8576ba69.js.map
