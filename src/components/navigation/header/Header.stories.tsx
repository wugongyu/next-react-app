import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import Header, { HeaderProps } from './Header';
import { mockHeaderProps } from './Header.mocks';

export default {
  title: 'navigation/header',
  components: Header,
  argTypes: {}
} as ComponentMeta<typeof Header>;

const Template:ComponentStory<typeof Header> = (args: JSX.IntrinsicAttributes & HeaderProps) => {
  return (<Header {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockHeaderProps.base,
} as HeaderProps;

