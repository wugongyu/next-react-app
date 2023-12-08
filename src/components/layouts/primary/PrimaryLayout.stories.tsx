import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import PrimaryLayout, { PrimaryLayoutProps } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

export default {
  title: 'layouts/PrimaryLayout',
  components: PrimaryLayout,
  argTypes: {}
} as ComponentMeta<typeof PrimaryLayout>;

const Template:ComponentStory<typeof PrimaryLayout> = (args: JSX.IntrinsicAttributes & PrimaryLayoutProps) => {
  return (<PrimaryLayout {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockPrimaryLayoutProps.PrimaryLayout,
} as PrimaryLayoutProps;

