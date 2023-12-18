import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { JSX } from 'react';
import Search, { SearchProps } from './Search';
import { mockSearchProps } from './Search.mocks';

export default {
  title: 'utility/Search',
  components: Search,
  argTypes: {}
} as ComponentMeta<typeof Search>;

const Template:ComponentStory<typeof Search> = (args: JSX.IntrinsicAttributes & SearchProps) => {
  return (<Search {...args} />)
}

export const base = Template.bind({});
base.args = {
  ...mockSearchProps.base,
} as SearchProps;

base.parameters = {
  nextjs: {
    router: {
      basePath: '/',
    },
  },
};

