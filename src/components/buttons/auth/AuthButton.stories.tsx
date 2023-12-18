import {  ComponentStory, ComponentMeta } from '@storybook/react';
import React, { JSX } from 'react';
import AuthButton, { AuthButtonProps } from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mocks';

export default {
  title: 'buttons/AuthButton',
  components: AuthButton,
  argTypes: {}
} as ComponentMeta<typeof AuthButton>;

const Template:ComponentStory<typeof AuthButton> = (args: JSX.IntrinsicAttributes & AuthButtonProps) => {
  return (<AuthButton {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockAuthButtonProps.base,
} as AuthButtonProps;

