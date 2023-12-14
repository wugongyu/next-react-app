import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import Footer, { FooterProps } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'navigation/footer',
  components: Footer,
  argTypes: {}
} as ComponentMeta<typeof Footer>;

const Template:ComponentStory<typeof Footer> = (args: JSX.IntrinsicAttributes & FooterProps) => {
  return (<Footer {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockFooterProps.base,
} as FooterProps;

