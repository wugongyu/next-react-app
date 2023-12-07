import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import BaseTemplate, { BaseTemplateProps } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/baseTemplate',
  components: BaseTemplate,
  argTypes: {}
} as ComponentMeta<typeof BaseTemplate>;

const Template:ComponentStory<typeof BaseTemplate> = (args: JSX.IntrinsicAttributes & BaseTemplateProps) => {
  return (<BaseTemplate {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockBaseTemplateProps.base,
} as BaseTemplateProps;

