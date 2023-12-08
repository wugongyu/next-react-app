import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import SideBarLayout, { SideBarLayoutProps } from './SideBarLayout';
import { mockSideBarLayoutProps } from './SideBarLayout.mocks';

export default {
  title: 'layouts/SideBarLayout',
  components: SideBarLayout,
  argTypes: {}
} as ComponentMeta<typeof SideBarLayout>;

const Template:ComponentStory<typeof SideBarLayout> = (args: JSX.IntrinsicAttributes & SideBarLayoutProps) => {
  return (<SideBarLayout {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockSideBarLayoutProps.base,
} as SideBarLayoutProps;

